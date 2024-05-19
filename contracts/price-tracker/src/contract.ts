import { NearBindgen, near, call, view } from 'near-sdk-js';

@NearBindgen({})
class HousePriceTracker {
  prices: Map<string, Array<{ price: string, timestamp: string}>> = new Map();

  @view({})
  get_price({ address } : { address: string}): Array<{ price: string, timestamp: string}> | null {
    return this.prices.get(address) || null;
  }

  @call({})
  set_price({ address, price } : { address: string, price: string }): void {
    near.log(`Setting price for ${address} to ${price}`);
    const timestamp = Date.now().toString();
    const priceRecord = { price, timestamp };

    if (this.prices.has(address)) {
      this.prices.get(address).push(priceRecord);
    } else {
      this.prices.set(address, [priceRecord])
    }
  }

  @view({})
  get_all_prices(): Array<{ address: string, prices: Array<{ price: string, timestamp: string }> }> {
    const allPrices: Array<{ address: string, prices: Array<{ price: string, timestamp: string }> }> = [];
    const keys = Array.from(this.prices.keys());

    for (let i = 0; i < keys.length; i++) {
      const address = keys[i];
      const priceHistory = this.prices.get(address);
      allPrices.push({ address, prices: priceHistory });
    }

    return allPrices;
  }
}