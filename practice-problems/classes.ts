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




/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */




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




/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */
