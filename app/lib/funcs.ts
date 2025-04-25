import { ContractItem } from "../utils/interfaces";

  export function truncateText(text: string, maxLength = 50) {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + "...";
  }

  export function truncateMiddle(text: string, maxLength = 25, ellipsis = "...") {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
  
    const charsToShow = maxLength - ellipsis.length;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
  
    return (
      text.slice(0, frontChars) +
      ellipsis +
      text.slice(text.length - backChars)
    );
  }

  export function formatAsCurrency(
    value: number | null | undefined,
    currency: string = 'NGN',
    options?: Intl.NumberFormatOptions
  ): string {
    if (typeof value !== 'number') {
      return '';
    }
  
    const locale = currency === 'NGN' ? 'en-NG' : undefined; // Default to Nigerian locale for NGN
  
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      ...options,
    });
  
    return formatter.format(value);
  }

  export const ArrayOfStages = ["CREATED" , "AGREED" , "PAID" , "DELIVERED" , "INSPECTED" , "COMPLETED"]
  

  export function getTotalCostOfProducts (contractItems: ContractItem[]): number{
    let total = 0;
    contractItems.forEach( item =>{
      total += (parseInt(item.quantity.toString()) || 1) * parseInt(item.price.toString())
    })
    return total;
  }