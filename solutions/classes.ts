/**
 * (1) Define the following class:
 *
 * BankAccount
 *
 *  Attributes
 *      amount: number // The amount of money in the bank account
 *      name: string // The name given to this bank account.
 *
 *  Methods
 *      constructor(name: string): BankAccount
 *          Creates a new bank account with the given name.
 *      deposit(added_amount: number): number
 *          Consumes the amount the user is depositing into their account, to be added to the amount.
 *          Returns the new balance.
 *      withdraw(amount_requested: number): number
 *          Consumes the amount the user is attempting to withdraw. If the amount in the account
 *          is less than the amount requested, set the account's amount to be 0 and return
 *          however much was in the account before then.
 *      isEmpty(): boolean
 *          Returns whether the account is empty (i.e., at zero).
 *
 */

class BankAccount {
  amount: number;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  deposit(added_amount: number): number {
    this.amount += added_amount;
    return this.amount;
  }

  withdraw(amount_requested: number): number {
    if (amount_requested > this.amount) {
      this.amount = 0;
    } else {
      this.amount -= amount_requested;
    }
    return this.amount;
  }

  isEmpty(): boolean {
    var empty = false;
    if (this.amount <= 0) {
      empty = true;
    }
    return empty;
  }
}

/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */

let a = new BankAccount("Me");
a.deposit(6);
a.withdraw(4);

let b = new BankAccount("You");
b.deposit(16);
b.withdraw(20);

let c = new BankAccount("Him");
c.deposit(20);
c.withdraw(20);

/**
 * (3) Define the following class:
 *
 * SpaceShip
 *
 *     Attributes:
 *         x: number // horizontal position on game grid
 *         y: number // vertical position on game grid
 *         callSign: string // Cool name for this ship
 *         onFire: boolean // Whether or not the ship is on fire
 *         ammo: number // How much ammo the ship has
 *         friends: Array<SpaceShip> // Other ships that this ship has met
 *
 *     Methods:
 *         constructor(): SpaceShip
 *             Spaceships start off at (0, 0), not on fire, with 0 ammo, and no friends.
 *         shoot(): void
 *             If there is ammo, decrease it by one and console.log a message about shooting.
 *             If there is no ammo, set the ship on fire.
 *         collectAmmo(clipAmount: number): void
 *             Add the clipAmount to the ammo
 *         makeFriend(newFriend: SpaceShip): boolean
 *             If the new friend has the same X and Y positions, add the newFriend to this
 *             ship's friends.
 *         pingFriends(): void
 *             Print out a message saying hello to each friend, referring to their callsign.
 *         moveTo(x: number, y: number): void
 *             Update the ship's position to the new location.
 *
 */

class SpaceShip {
  x: number;
  y: number;
  callSign: string;
  onFire: boolean;
  ammo: number;
  friends: Array<SpaceShip>;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.onFire = false;
    this.ammo = 0;
    this.friends = [];
  }

  shoot() {
    if (this.ammo == 0) {
      this.onFire = true;
    } else {
      this.ammo -= 1;
      console.log("Pew pew");
    }
  }

  collectAmmo(clipAmount: number) {
    this.ammo += clipAmount;
  }

  makeFriend(newFriend: SpaceShip): boolean {
    if (this.x === newFriend.x && this.y === newFriend.y) {
      this.friends.push(newFriend);
      return true;
    } else {
      return false;
    }
  }

  pingFriends() {
    for (let i = 0; i < this.friends.length - 1; i++) {
      console.log("Hello " + this.friends[i].callSign);
    }
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */

let shipa = new SpaceShip();
let shipb = new SpaceShip();
let shipc = new SpaceShip();

shipa.makeFriend(shipb);
shipa.makeFriend(shipc);

shipa.shoot();
shipb.collectAmmo(5);
shipb.shoot();

shipa.pingFriends();
shipc.moveTo(4, 3);
shipc.makeFriend(shipb);
