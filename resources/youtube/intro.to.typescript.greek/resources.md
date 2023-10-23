# Σημειώσεις & διορθώσεις για το video "Εισαγωγή στην TypeScript"

URL: [https://www.youtube.com/watch?v=Er_a-NwKMws](https://www.youtube.com/watch?v=Er_a-NwKMws)

## Fixing the `premium` type issue ("golden" | "bronze") (Timestamp: 01:10:15)

```ts
type premiumTag = "golden" | "bronze"

interface IPAccount {
  premium: premiumTag
}

class Premium implements IPAccount {
  // Way 1) 
  premium = "golden" as premiumTag;
  
  // Way 2)
  premium:premiumTag = "golden";
}
```

## Fixing the Premium Class type (Timestamp: 01:13:00)

The correct code is the following:

```ts
interface Account {
  balance:number
}

type premiumTag = "golden" | "bronze"

interface IPAccount {
  premium: premiumTag;
}
type ISpecial = Account & IPAccount;

class Premium implements ISpecial /* NOT: implements IPAccount*/ {
  balance:number;
  premium:premiumTag;
  constructor(balance:number, premium:premiumTag){
    this.balance = balance;
    this.premium = premium;
  }
}

const premium = new Premium(100, "golden");
// premium has an inferred type `Premium` which in turn implements `ISpecial`
```

## Timestamp: 01:18:55

The correct syntax for the type on the 3rd example should be `object[]` and not `{}[]`
