import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import mean_absolute_error
from xgboost import XGBRegressor
import datetime

# Function to get hardcoded property data (price only)
def get_hardcoded_property_data(address):
    # Example hardcoded data for different addresses
    property_data = {
        "123 Main St": {'price': 300000},
        "456 Maple Ave": {'price': 400000},
        "789 Oak Dr": {'price': 280000},
        "2258 Bankside Drive": {'price': 450000}
    }
    
    return property_data.get(address, None)

# Function to generate synthetic historical data
def generate_synthetic_historical_data():
    np.random.seed(42)
    data = []
    for year in range(1800, 2100):
        for _ in range(100):  # Increase the number of samples per year
            base_price = 200000
            inflation_factor = (1 + 0.03) ** (year - 1990)  # Simulate inflation
            market_trend = np.sin((year - 1990) / 5) * 20000  # Simulate market cycles
            noise = np.random.normal(0, 50000)
            price = base_price * inflation_factor + market_trend + noise
            data.append({'year': year, 'price': price})
    return pd.DataFrame(data)

# Function to train the model
def train_model(data):
    features = ['year']
    target = 'price'

    X = data[features]
    y = data[target]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    xgb_model = XGBRegressor(objective='reg:squarederror', random_state=42)

    param_grid = {
        'n_estimators': [100, 200],
        'max_depth': [3, 5, 7],
        'learning_rate': [0.01, 0.1, 0.2],
        'subsample': [0.7, 0.8, 0.9]
    }

    grid_search = GridSearchCV(estimator=xgb_model, param_grid=param_grid, cv=3, n_jobs=-1, scoring='neg_mean_absolute_error')
    grid_search.fit(X_train, y_train)

    best_model = grid_search.best_estimator_
    
    y_pred_train = best_model.predict(X_train)
    y_pred_test = best_model.predict(X_test)

    train_mae = mean_absolute_error(y_train, y_pred_train)
    test_mae = mean_absolute_error(y_test, y_pred_test)

    print(f'Training MAE: {train_mae}')
    print(f'Testing MAE: {test_mae}')

    return best_model

# Function to predict prices
def predict_prices(model, current_price, years):
    current_year = datetime.datetime.now().year
    
    results = []

    for year_offset in range(-years, years + 1):
        year = current_year + year_offset
        input_data = pd.DataFrame({'year': [year]})
        predicted_price = model.predict(input_data)[0]
        # Adjust the predicted price based on the current price
        adjusted_price = predicted_price + (current_price - model.predict(pd.DataFrame({'year': [current_year]}))[0])
        results.append({'year': year, 'predicted_price': adjusted_price})

    return pd.DataFrame(results)

# Function to plot prices
def plot_prices(predictions):
    plt.figure(figsize=(10, 6))
    plt.plot(predictions['year'], predictions['predicted_price'], marker='o')
    plt.xlabel('Year')
    plt.ylabel('Predicted Price')
    plt.title('Predicted Property Prices Over Time')
    plt.grid(True)
    plt.show()

# Main function
def main():
    try:
        # Input parameters
        address = input("Enter the address of the house: ").strip()  # Strip any leading/trailing spaces
        years = int(input("Enter the number of years in the past or future you want to model: "))

        if years <= 0:
            print("Error: Number of years must be a positive integer.")
            return

        # Get hardcoded property data
        property_data = get_hardcoded_property_data(address)
        if not property_data:
            print(f"Error: Address '{address}' not found in the dataset.")
            return

        # Generate synthetic historical data for training the model
        historical_data = generate_synthetic_historical_data()
        model = train_model(historical_data)

        # Predict prices
        predictions = predict_prices(model, property_data['price'], years)
        print(predictions)

        # Plot prices
        plot_prices(predictions)

    except ValueError:
        print("Error: Please enter a valid number for the number of years.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the script
if __name__ == "__main__":
    main()