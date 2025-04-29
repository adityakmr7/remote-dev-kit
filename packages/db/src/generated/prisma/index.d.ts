
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model UserTeam
 * 
 */
export type UserTeam = $Result.DefaultSelection<Prisma.$UserTeamPayload>
/**
 * Model Standup
 * 
 */
export type Standup = $Result.DefaultSelection<Prisma.$StandupPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PairProgrammingSession
 * 
 */
export type PairProgrammingSession = $Result.DefaultSelection<Prisma.$PairProgrammingSessionPayload>
/**
 * Model TeamInvitation
 * 
 */
export type TeamInvitation = $Result.DefaultSelection<Prisma.$TeamInvitationPayload>
/**
 * Model PairSessionParticipant
 * 
 */
export type PairSessionParticipant = $Result.DefaultSelection<Prisma.$PairSessionParticipantPayload>
/**
 * Model PullRequest
 * 
 */
export type PullRequest = $Result.DefaultSelection<Prisma.$PullRequestPayload>
/**
 * Model FocusTime
 * 
 */
export type FocusTime = $Result.DefaultSelection<Prisma.$FocusTimePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTeam`: Exposes CRUD operations for the **UserTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTeams
    * const userTeams = await prisma.userTeam.findMany()
    * ```
    */
  get userTeam(): Prisma.UserTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.standup`: Exposes CRUD operations for the **Standup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Standups
    * const standups = await prisma.standup.findMany()
    * ```
    */
  get standup(): Prisma.StandupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pairProgrammingSession`: Exposes CRUD operations for the **PairProgrammingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PairProgrammingSessions
    * const pairProgrammingSessions = await prisma.pairProgrammingSession.findMany()
    * ```
    */
  get pairProgrammingSession(): Prisma.PairProgrammingSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamInvitation`: Exposes CRUD operations for the **TeamInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamInvitations
    * const teamInvitations = await prisma.teamInvitation.findMany()
    * ```
    */
  get teamInvitation(): Prisma.TeamInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pairSessionParticipant`: Exposes CRUD operations for the **PairSessionParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PairSessionParticipants
    * const pairSessionParticipants = await prisma.pairSessionParticipant.findMany()
    * ```
    */
  get pairSessionParticipant(): Prisma.PairSessionParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pullRequest`: Exposes CRUD operations for the **PullRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullRequests
    * const pullRequests = await prisma.pullRequest.findMany()
    * ```
    */
  get pullRequest(): Prisma.PullRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.focusTime`: Exposes CRUD operations for the **FocusTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocusTimes
    * const focusTimes = await prisma.focusTime.findMany()
    * ```
    */
  get focusTime(): Prisma.FocusTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    UserTeam: 'UserTeam',
    Standup: 'Standup',
    Tag: 'Tag',
    PairProgrammingSession: 'PairProgrammingSession',
    TeamInvitation: 'TeamInvitation',
    PairSessionParticipant: 'PairSessionParticipant',
    PullRequest: 'PullRequest',
    FocusTime: 'FocusTime',
    Subscription: 'Subscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "team" | "userTeam" | "standup" | "tag" | "pairProgrammingSession" | "teamInvitation" | "pairSessionParticipant" | "pullRequest" | "focusTime" | "subscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      UserTeam: {
        payload: Prisma.$UserTeamPayload<ExtArgs>
        fields: Prisma.UserTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>
          }
          findFirst: {
            args: Prisma.UserTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>
          }
          findMany: {
            args: Prisma.UserTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>[]
          }
          create: {
            args: Prisma.UserTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>
          }
          createMany: {
            args: Prisma.UserTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>[]
          }
          delete: {
            args: Prisma.UserTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>
          }
          update: {
            args: Prisma.UserTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>
          }
          deleteMany: {
            args: Prisma.UserTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>[]
          }
          upsert: {
            args: Prisma.UserTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTeamPayload>
          }
          aggregate: {
            args: Prisma.UserTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTeam>
          }
          groupBy: {
            args: Prisma.UserTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTeamCountArgs<ExtArgs>
            result: $Utils.Optional<UserTeamCountAggregateOutputType> | number
          }
        }
      }
      Standup: {
        payload: Prisma.$StandupPayload<ExtArgs>
        fields: Prisma.StandupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StandupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StandupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>
          }
          findFirst: {
            args: Prisma.StandupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StandupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>
          }
          findMany: {
            args: Prisma.StandupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>[]
          }
          create: {
            args: Prisma.StandupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>
          }
          createMany: {
            args: Prisma.StandupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StandupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>[]
          }
          delete: {
            args: Prisma.StandupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>
          }
          update: {
            args: Prisma.StandupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>
          }
          deleteMany: {
            args: Prisma.StandupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StandupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StandupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>[]
          }
          upsert: {
            args: Prisma.StandupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandupPayload>
          }
          aggregate: {
            args: Prisma.StandupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStandup>
          }
          groupBy: {
            args: Prisma.StandupGroupByArgs<ExtArgs>
            result: $Utils.Optional<StandupGroupByOutputType>[]
          }
          count: {
            args: Prisma.StandupCountArgs<ExtArgs>
            result: $Utils.Optional<StandupCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      PairProgrammingSession: {
        payload: Prisma.$PairProgrammingSessionPayload<ExtArgs>
        fields: Prisma.PairProgrammingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PairProgrammingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairProgrammingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>
          }
          findFirst: {
            args: Prisma.PairProgrammingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairProgrammingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>
          }
          findMany: {
            args: Prisma.PairProgrammingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>[]
          }
          create: {
            args: Prisma.PairProgrammingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>
          }
          createMany: {
            args: Prisma.PairProgrammingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PairProgrammingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>[]
          }
          delete: {
            args: Prisma.PairProgrammingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>
          }
          update: {
            args: Prisma.PairProgrammingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>
          }
          deleteMany: {
            args: Prisma.PairProgrammingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PairProgrammingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PairProgrammingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>[]
          }
          upsert: {
            args: Prisma.PairProgrammingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairProgrammingSessionPayload>
          }
          aggregate: {
            args: Prisma.PairProgrammingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePairProgrammingSession>
          }
          groupBy: {
            args: Prisma.PairProgrammingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PairProgrammingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairProgrammingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PairProgrammingSessionCountAggregateOutputType> | number
          }
        }
      }
      TeamInvitation: {
        payload: Prisma.$TeamInvitationPayload<ExtArgs>
        fields: Prisma.TeamInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          findFirst: {
            args: Prisma.TeamInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          findMany: {
            args: Prisma.TeamInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>[]
          }
          create: {
            args: Prisma.TeamInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          createMany: {
            args: Prisma.TeamInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>[]
          }
          delete: {
            args: Prisma.TeamInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          update: {
            args: Prisma.TeamInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          deleteMany: {
            args: Prisma.TeamInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>[]
          }
          upsert: {
            args: Prisma.TeamInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          aggregate: {
            args: Prisma.TeamInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamInvitation>
          }
          groupBy: {
            args: Prisma.TeamInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<TeamInvitationCountAggregateOutputType> | number
          }
        }
      }
      PairSessionParticipant: {
        payload: Prisma.$PairSessionParticipantPayload<ExtArgs>
        fields: Prisma.PairSessionParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PairSessionParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairSessionParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>
          }
          findFirst: {
            args: Prisma.PairSessionParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairSessionParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>
          }
          findMany: {
            args: Prisma.PairSessionParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>[]
          }
          create: {
            args: Prisma.PairSessionParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>
          }
          createMany: {
            args: Prisma.PairSessionParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PairSessionParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>[]
          }
          delete: {
            args: Prisma.PairSessionParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>
          }
          update: {
            args: Prisma.PairSessionParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>
          }
          deleteMany: {
            args: Prisma.PairSessionParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PairSessionParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PairSessionParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>[]
          }
          upsert: {
            args: Prisma.PairSessionParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairSessionParticipantPayload>
          }
          aggregate: {
            args: Prisma.PairSessionParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePairSessionParticipant>
          }
          groupBy: {
            args: Prisma.PairSessionParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<PairSessionParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairSessionParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<PairSessionParticipantCountAggregateOutputType> | number
          }
        }
      }
      PullRequest: {
        payload: Prisma.$PullRequestPayload<ExtArgs>
        fields: Prisma.PullRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PullRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PullRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findFirst: {
            args: Prisma.PullRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PullRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findMany: {
            args: Prisma.PullRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          create: {
            args: Prisma.PullRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          createMany: {
            args: Prisma.PullRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PullRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          delete: {
            args: Prisma.PullRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          update: {
            args: Prisma.PullRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          deleteMany: {
            args: Prisma.PullRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PullRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PullRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          upsert: {
            args: Prisma.PullRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          aggregate: {
            args: Prisma.PullRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePullRequest>
          }
          groupBy: {
            args: Prisma.PullRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PullRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PullRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PullRequestCountAggregateOutputType> | number
          }
        }
      }
      FocusTime: {
        payload: Prisma.$FocusTimePayload<ExtArgs>
        fields: Prisma.FocusTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FocusTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FocusTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>
          }
          findFirst: {
            args: Prisma.FocusTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FocusTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>
          }
          findMany: {
            args: Prisma.FocusTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>[]
          }
          create: {
            args: Prisma.FocusTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>
          }
          createMany: {
            args: Prisma.FocusTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FocusTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>[]
          }
          delete: {
            args: Prisma.FocusTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>
          }
          update: {
            args: Prisma.FocusTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>
          }
          deleteMany: {
            args: Prisma.FocusTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FocusTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FocusTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>[]
          }
          upsert: {
            args: Prisma.FocusTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusTimePayload>
          }
          aggregate: {
            args: Prisma.FocusTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFocusTime>
          }
          groupBy: {
            args: Prisma.FocusTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FocusTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FocusTimeCountArgs<ExtArgs>
            result: $Utils.Optional<FocusTimeCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    userTeam?: UserTeamOmit
    standup?: StandupOmit
    tag?: TagOmit
    pairProgrammingSession?: PairProgrammingSessionOmit
    teamInvitation?: TeamInvitationOmit
    pairSessionParticipant?: PairSessionParticipantOmit
    pullRequest?: PullRequestOmit
    focusTime?: FocusTimeOmit
    subscription?: SubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teams: number
    standups: number
    pairSessions: number
    pullRequests: number
    focusTimes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    standups?: boolean | UserCountOutputTypeCountStandupsArgs
    pairSessions?: boolean | UserCountOutputTypeCountPairSessionsArgs
    pullRequests?: boolean | UserCountOutputTypeCountPullRequestsArgs
    focusTimes?: boolean | UserCountOutputTypeCountFocusTimesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStandupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPairSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairSessionParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFocusTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusTimeWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    pairSessions: number
    pullRequests: number
    standups: number
    TeamInvitation: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    pairSessions?: boolean | TeamCountOutputTypeCountPairSessionsArgs
    pullRequests?: boolean | TeamCountOutputTypeCountPullRequestsArgs
    standups?: boolean | TeamCountOutputTypeCountStandupsArgs
    TeamInvitation?: boolean | TeamCountOutputTypeCountTeamInvitationArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPairSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairProgrammingSessionWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountStandupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamInvitationWhereInput
  }


  /**
   * Count Type StandupCountOutputType
   */

  export type StandupCountOutputType = {
    tags: number
  }

  export type StandupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | StandupCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * StandupCountOutputType without action
   */
  export type StandupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandupCountOutputType
     */
    select?: StandupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StandupCountOutputType without action
   */
  export type StandupCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    standups: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    standups?: boolean | TagCountOutputTypeCountStandupsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountStandupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupWhereInput
  }


  /**
   * Count Type PairProgrammingSessionCountOutputType
   */

  export type PairProgrammingSessionCountOutputType = {
    participants: number
  }

  export type PairProgrammingSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | PairProgrammingSessionCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * PairProgrammingSessionCountOutputType without action
   */
  export type PairProgrammingSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSessionCountOutputType
     */
    select?: PairProgrammingSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PairProgrammingSessionCountOutputType without action
   */
  export type PairProgrammingSessionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairSessionParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatarUrl: string | null
    provider: string | null
    status: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatarUrl: string | null
    provider: string | null
    status: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatarUrl: number
    provider: number
    status: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    provider?: true
    status?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    provider?: true
    status?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    provider?: true
    status?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    name: string | null
    avatarUrl: string | null
    provider: string
    status: string | null
    role: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    provider?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | User$teamsArgs<ExtArgs>
    standups?: boolean | User$standupsArgs<ExtArgs>
    pairSessions?: boolean | User$pairSessionsArgs<ExtArgs>
    pullRequests?: boolean | User$pullRequestsArgs<ExtArgs>
    focusTimes?: boolean | User$focusTimesArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    provider?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    provider?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    provider?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatarUrl" | "provider" | "status" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | User$teamsArgs<ExtArgs>
    standups?: boolean | User$standupsArgs<ExtArgs>
    pairSessions?: boolean | User$pairSessionsArgs<ExtArgs>
    pullRequests?: boolean | User$pullRequestsArgs<ExtArgs>
    focusTimes?: boolean | User$focusTimesArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teams: Prisma.$UserTeamPayload<ExtArgs>[]
      standups: Prisma.$StandupPayload<ExtArgs>[]
      pairSessions: Prisma.$PairSessionParticipantPayload<ExtArgs>[]
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
      focusTimes: Prisma.$FocusTimePayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string | null
      avatarUrl: string | null
      provider: string
      status: string | null
      role: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    standups<T extends User$standupsArgs<ExtArgs> = {}>(args?: Subset<T, User$standupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pairSessions<T extends User$pairSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pairSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pullRequests<T extends User$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    focusTimes<T extends User$focusTimesArgs<ExtArgs> = {}>(args?: Subset<T, User$focusTimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    where?: UserTeamWhereInput
    orderBy?: UserTeamOrderByWithRelationInput | UserTeamOrderByWithRelationInput[]
    cursor?: UserTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTeamScalarFieldEnum | UserTeamScalarFieldEnum[]
  }

  /**
   * User.standups
   */
  export type User$standupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    where?: StandupWhereInput
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    cursor?: StandupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandupScalarFieldEnum | StandupScalarFieldEnum[]
  }

  /**
   * User.pairSessions
   */
  export type User$pairSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    where?: PairSessionParticipantWhereInput
    orderBy?: PairSessionParticipantOrderByWithRelationInput | PairSessionParticipantOrderByWithRelationInput[]
    cursor?: PairSessionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairSessionParticipantScalarFieldEnum | PairSessionParticipantScalarFieldEnum[]
  }

  /**
   * User.pullRequests
   */
  export type User$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * User.focusTimes
   */
  export type User$focusTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    where?: FocusTimeWhereInput
    orderBy?: FocusTimeOrderByWithRelationInput | FocusTimeOrderByWithRelationInput[]
    cursor?: FocusTimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusTimeScalarFieldEnum | FocusTimeScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    pairSessions?: boolean | Team$pairSessionsArgs<ExtArgs>
    pullRequests?: boolean | Team$pullRequestsArgs<ExtArgs>
    standups?: boolean | Team$standupsArgs<ExtArgs>
    TeamInvitation?: boolean | Team$TeamInvitationArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    pairSessions?: boolean | Team$pairSessionsArgs<ExtArgs>
    pullRequests?: boolean | Team$pullRequestsArgs<ExtArgs>
    standups?: boolean | Team$standupsArgs<ExtArgs>
    TeamInvitation?: boolean | Team$TeamInvitationArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$UserTeamPayload<ExtArgs>[]
      pairSessions: Prisma.$PairProgrammingSessionPayload<ExtArgs>[]
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
      standups: Prisma.$StandupPayload<ExtArgs>[]
      TeamInvitation: Prisma.$TeamInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pairSessions<T extends Team$pairSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$pairSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pullRequests<T extends Team$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Team$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    standups<T extends Team$standupsArgs<ExtArgs> = {}>(args?: Subset<T, Team$standupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TeamInvitation<T extends Team$TeamInvitationArgs<ExtArgs> = {}>(args?: Subset<T, Team$TeamInvitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    where?: UserTeamWhereInput
    orderBy?: UserTeamOrderByWithRelationInput | UserTeamOrderByWithRelationInput[]
    cursor?: UserTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTeamScalarFieldEnum | UserTeamScalarFieldEnum[]
  }

  /**
   * Team.pairSessions
   */
  export type Team$pairSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    where?: PairProgrammingSessionWhereInput
    orderBy?: PairProgrammingSessionOrderByWithRelationInput | PairProgrammingSessionOrderByWithRelationInput[]
    cursor?: PairProgrammingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairProgrammingSessionScalarFieldEnum | PairProgrammingSessionScalarFieldEnum[]
  }

  /**
   * Team.pullRequests
   */
  export type Team$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * Team.standups
   */
  export type Team$standupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    where?: StandupWhereInput
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    cursor?: StandupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandupScalarFieldEnum | StandupScalarFieldEnum[]
  }

  /**
   * Team.TeamInvitation
   */
  export type Team$TeamInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    where?: TeamInvitationWhereInput
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    cursor?: TeamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model UserTeam
   */

  export type AggregateUserTeam = {
    _count: UserTeamCountAggregateOutputType | null
    _min: UserTeamMinAggregateOutputType | null
    _max: UserTeamMaxAggregateOutputType | null
  }

  export type UserTeamMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTeamMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTeamCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserTeamMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTeamMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTeamCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTeam to aggregate.
     */
    where?: UserTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamOrderByWithRelationInput | UserTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTeams
    **/
    _count?: true | UserTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTeamMaxAggregateInputType
  }

  export type GetUserTeamAggregateType<T extends UserTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTeam[P]>
      : GetScalarType<T[P], AggregateUserTeam[P]>
  }




  export type UserTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTeamWhereInput
    orderBy?: UserTeamOrderByWithAggregationInput | UserTeamOrderByWithAggregationInput[]
    by: UserTeamScalarFieldEnum[] | UserTeamScalarFieldEnum
    having?: UserTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTeamCountAggregateInputType | true
    _min?: UserTeamMinAggregateInputType
    _max?: UserTeamMaxAggregateInputType
  }

  export type UserTeamGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserTeamCountAggregateOutputType | null
    _min: UserTeamMinAggregateOutputType | null
    _max: UserTeamMaxAggregateOutputType | null
  }

  type GetUserTeamGroupByPayload<T extends UserTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTeamGroupByOutputType[P]>
            : GetScalarType<T[P], UserTeamGroupByOutputType[P]>
        }
      >
    >


  export type UserTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeam"]>

  export type UserTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeam"]>

  export type UserTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTeam"]>

  export type UserTeamSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["userTeam"]>
  export type UserTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type UserTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type UserTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $UserTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTeam"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userTeam"]>
    composites: {}
  }

  type UserTeamGetPayload<S extends boolean | null | undefined | UserTeamDefaultArgs> = $Result.GetResult<Prisma.$UserTeamPayload, S>

  type UserTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTeamCountAggregateInputType | true
    }

  export interface UserTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTeam'], meta: { name: 'UserTeam' } }
    /**
     * Find zero or one UserTeam that matches the filter.
     * @param {UserTeamFindUniqueArgs} args - Arguments to find a UserTeam
     * @example
     * // Get one UserTeam
     * const userTeam = await prisma.userTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTeamFindUniqueArgs>(args: SelectSubset<T, UserTeamFindUniqueArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTeamFindUniqueOrThrowArgs} args - Arguments to find a UserTeam
     * @example
     * // Get one UserTeam
     * const userTeam = await prisma.userTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamFindFirstArgs} args - Arguments to find a UserTeam
     * @example
     * // Get one UserTeam
     * const userTeam = await prisma.userTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTeamFindFirstArgs>(args?: SelectSubset<T, UserTeamFindFirstArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamFindFirstOrThrowArgs} args - Arguments to find a UserTeam
     * @example
     * // Get one UserTeam
     * const userTeam = await prisma.userTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTeams
     * const userTeams = await prisma.userTeam.findMany()
     * 
     * // Get first 10 UserTeams
     * const userTeams = await prisma.userTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTeamWithIdOnly = await prisma.userTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTeamFindManyArgs>(args?: SelectSubset<T, UserTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTeam.
     * @param {UserTeamCreateArgs} args - Arguments to create a UserTeam.
     * @example
     * // Create one UserTeam
     * const UserTeam = await prisma.userTeam.create({
     *   data: {
     *     // ... data to create a UserTeam
     *   }
     * })
     * 
     */
    create<T extends UserTeamCreateArgs>(args: SelectSubset<T, UserTeamCreateArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTeams.
     * @param {UserTeamCreateManyArgs} args - Arguments to create many UserTeams.
     * @example
     * // Create many UserTeams
     * const userTeam = await prisma.userTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTeamCreateManyArgs>(args?: SelectSubset<T, UserTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTeams and returns the data saved in the database.
     * @param {UserTeamCreateManyAndReturnArgs} args - Arguments to create many UserTeams.
     * @example
     * // Create many UserTeams
     * const userTeam = await prisma.userTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTeams and only return the `id`
     * const userTeamWithIdOnly = await prisma.userTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTeam.
     * @param {UserTeamDeleteArgs} args - Arguments to delete one UserTeam.
     * @example
     * // Delete one UserTeam
     * const UserTeam = await prisma.userTeam.delete({
     *   where: {
     *     // ... filter to delete one UserTeam
     *   }
     * })
     * 
     */
    delete<T extends UserTeamDeleteArgs>(args: SelectSubset<T, UserTeamDeleteArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTeam.
     * @param {UserTeamUpdateArgs} args - Arguments to update one UserTeam.
     * @example
     * // Update one UserTeam
     * const userTeam = await prisma.userTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTeamUpdateArgs>(args: SelectSubset<T, UserTeamUpdateArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTeams.
     * @param {UserTeamDeleteManyArgs} args - Arguments to filter UserTeams to delete.
     * @example
     * // Delete a few UserTeams
     * const { count } = await prisma.userTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTeamDeleteManyArgs>(args?: SelectSubset<T, UserTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTeams
     * const userTeam = await prisma.userTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTeamUpdateManyArgs>(args: SelectSubset<T, UserTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTeams and returns the data updated in the database.
     * @param {UserTeamUpdateManyAndReturnArgs} args - Arguments to update many UserTeams.
     * @example
     * // Update many UserTeams
     * const userTeam = await prisma.userTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTeams and only return the `id`
     * const userTeamWithIdOnly = await prisma.userTeam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTeam.
     * @param {UserTeamUpsertArgs} args - Arguments to update or create a UserTeam.
     * @example
     * // Update or create a UserTeam
     * const userTeam = await prisma.userTeam.upsert({
     *   create: {
     *     // ... data to create a UserTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTeam we want to update
     *   }
     * })
     */
    upsert<T extends UserTeamUpsertArgs>(args: SelectSubset<T, UserTeamUpsertArgs<ExtArgs>>): Prisma__UserTeamClient<$Result.GetResult<Prisma.$UserTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamCountArgs} args - Arguments to filter UserTeams to count.
     * @example
     * // Count the number of UserTeams
     * const count = await prisma.userTeam.count({
     *   where: {
     *     // ... the filter for the UserTeams we want to count
     *   }
     * })
    **/
    count<T extends UserTeamCountArgs>(
      args?: Subset<T, UserTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTeamAggregateArgs>(args: Subset<T, UserTeamAggregateArgs>): Prisma.PrismaPromise<GetUserTeamAggregateType<T>>

    /**
     * Group by UserTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTeamGroupByArgs['orderBy'] }
        : { orderBy?: UserTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTeam model
   */
  readonly fields: UserTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTeam model
   */
  interface UserTeamFieldRefs {
    readonly id: FieldRef<"UserTeam", 'String'>
    readonly userId: FieldRef<"UserTeam", 'String'>
    readonly teamId: FieldRef<"UserTeam", 'String'>
    readonly role: FieldRef<"UserTeam", 'String'>
    readonly createdAt: FieldRef<"UserTeam", 'DateTime'>
    readonly updatedAt: FieldRef<"UserTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTeam findUnique
   */
  export type UserTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserTeam to fetch.
     */
    where: UserTeamWhereUniqueInput
  }

  /**
   * UserTeam findUniqueOrThrow
   */
  export type UserTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserTeam to fetch.
     */
    where: UserTeamWhereUniqueInput
  }

  /**
   * UserTeam findFirst
   */
  export type UserTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserTeam to fetch.
     */
    where?: UserTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamOrderByWithRelationInput | UserTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTeams.
     */
    cursor?: UserTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTeams.
     */
    distinct?: UserTeamScalarFieldEnum | UserTeamScalarFieldEnum[]
  }

  /**
   * UserTeam findFirstOrThrow
   */
  export type UserTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserTeam to fetch.
     */
    where?: UserTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamOrderByWithRelationInput | UserTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTeams.
     */
    cursor?: UserTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTeams.
     */
    distinct?: UserTeamScalarFieldEnum | UserTeamScalarFieldEnum[]
  }

  /**
   * UserTeam findMany
   */
  export type UserTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * Filter, which UserTeams to fetch.
     */
    where?: UserTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTeams to fetch.
     */
    orderBy?: UserTeamOrderByWithRelationInput | UserTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTeams.
     */
    cursor?: UserTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTeams.
     */
    skip?: number
    distinct?: UserTeamScalarFieldEnum | UserTeamScalarFieldEnum[]
  }

  /**
   * UserTeam create
   */
  export type UserTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTeam.
     */
    data: XOR<UserTeamCreateInput, UserTeamUncheckedCreateInput>
  }

  /**
   * UserTeam createMany
   */
  export type UserTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTeams.
     */
    data: UserTeamCreateManyInput | UserTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTeam createManyAndReturn
   */
  export type UserTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * The data used to create many UserTeams.
     */
    data: UserTeamCreateManyInput | UserTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTeam update
   */
  export type UserTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTeam.
     */
    data: XOR<UserTeamUpdateInput, UserTeamUncheckedUpdateInput>
    /**
     * Choose, which UserTeam to update.
     */
    where: UserTeamWhereUniqueInput
  }

  /**
   * UserTeam updateMany
   */
  export type UserTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTeams.
     */
    data: XOR<UserTeamUpdateManyMutationInput, UserTeamUncheckedUpdateManyInput>
    /**
     * Filter which UserTeams to update
     */
    where?: UserTeamWhereInput
    /**
     * Limit how many UserTeams to update.
     */
    limit?: number
  }

  /**
   * UserTeam updateManyAndReturn
   */
  export type UserTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * The data used to update UserTeams.
     */
    data: XOR<UserTeamUpdateManyMutationInput, UserTeamUncheckedUpdateManyInput>
    /**
     * Filter which UserTeams to update
     */
    where?: UserTeamWhereInput
    /**
     * Limit how many UserTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTeam upsert
   */
  export type UserTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTeam to update in case it exists.
     */
    where: UserTeamWhereUniqueInput
    /**
     * In case the UserTeam found by the `where` argument doesn't exist, create a new UserTeam with this data.
     */
    create: XOR<UserTeamCreateInput, UserTeamUncheckedCreateInput>
    /**
     * In case the UserTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTeamUpdateInput, UserTeamUncheckedUpdateInput>
  }

  /**
   * UserTeam delete
   */
  export type UserTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
    /**
     * Filter which UserTeam to delete.
     */
    where: UserTeamWhereUniqueInput
  }

  /**
   * UserTeam deleteMany
   */
  export type UserTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTeams to delete
     */
    where?: UserTeamWhereInput
    /**
     * Limit how many UserTeams to delete.
     */
    limit?: number
  }

  /**
   * UserTeam without action
   */
  export type UserTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTeam
     */
    select?: UserTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTeam
     */
    omit?: UserTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTeamInclude<ExtArgs> | null
  }


  /**
   * Model Standup
   */

  export type AggregateStandup = {
    _count: StandupCountAggregateOutputType | null
    _min: StandupMinAggregateOutputType | null
    _max: StandupMaxAggregateOutputType | null
  }

  export type StandupMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    yesterday: string | null
    today: string | null
    blockers: string | null
    audioUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandupMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    yesterday: string | null
    today: string | null
    blockers: string | null
    audioUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StandupCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    yesterday: number
    today: number
    blockers: number
    audioUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StandupMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandupMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StandupCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StandupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Standup to aggregate.
     */
    where?: StandupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Standups to fetch.
     */
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StandupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Standups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Standups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Standups
    **/
    _count?: true | StandupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StandupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StandupMaxAggregateInputType
  }

  export type GetStandupAggregateType<T extends StandupAggregateArgs> = {
        [P in keyof T & keyof AggregateStandup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStandup[P]>
      : GetScalarType<T[P], AggregateStandup[P]>
  }




  export type StandupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupWhereInput
    orderBy?: StandupOrderByWithAggregationInput | StandupOrderByWithAggregationInput[]
    by: StandupScalarFieldEnum[] | StandupScalarFieldEnum
    having?: StandupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StandupCountAggregateInputType | true
    _min?: StandupMinAggregateInputType
    _max?: StandupMaxAggregateInputType
  }

  export type StandupGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    yesterday: string | null
    today: string | null
    blockers: string | null
    audioUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: StandupCountAggregateOutputType | null
    _min: StandupMinAggregateOutputType | null
    _max: StandupMaxAggregateOutputType | null
  }

  type GetStandupGroupByPayload<T extends StandupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StandupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StandupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandupGroupByOutputType[P]>
            : GetScalarType<T[P], StandupGroupByOutputType[P]>
        }
      >
    >


  export type StandupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    tags?: boolean | Standup$tagsArgs<ExtArgs>
    _count?: boolean | StandupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standup"]>

  export type StandupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standup"]>

  export type StandupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standup"]>

  export type StandupSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StandupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "yesterday" | "today" | "blockers" | "audioUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["standup"]>
  export type StandupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    tags?: boolean | Standup$tagsArgs<ExtArgs>
    _count?: boolean | StandupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StandupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type StandupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $StandupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Standup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      yesterday: string | null
      today: string | null
      blockers: string | null
      audioUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["standup"]>
    composites: {}
  }

  type StandupGetPayload<S extends boolean | null | undefined | StandupDefaultArgs> = $Result.GetResult<Prisma.$StandupPayload, S>

  type StandupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StandupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StandupCountAggregateInputType | true
    }

  export interface StandupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Standup'], meta: { name: 'Standup' } }
    /**
     * Find zero or one Standup that matches the filter.
     * @param {StandupFindUniqueArgs} args - Arguments to find a Standup
     * @example
     * // Get one Standup
     * const standup = await prisma.standup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandupFindUniqueArgs>(args: SelectSubset<T, StandupFindUniqueArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Standup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StandupFindUniqueOrThrowArgs} args - Arguments to find a Standup
     * @example
     * // Get one Standup
     * const standup = await prisma.standup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandupFindUniqueOrThrowArgs>(args: SelectSubset<T, StandupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Standup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupFindFirstArgs} args - Arguments to find a Standup
     * @example
     * // Get one Standup
     * const standup = await prisma.standup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandupFindFirstArgs>(args?: SelectSubset<T, StandupFindFirstArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Standup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupFindFirstOrThrowArgs} args - Arguments to find a Standup
     * @example
     * // Get one Standup
     * const standup = await prisma.standup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandupFindFirstOrThrowArgs>(args?: SelectSubset<T, StandupFindFirstOrThrowArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Standups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Standups
     * const standups = await prisma.standup.findMany()
     * 
     * // Get first 10 Standups
     * const standups = await prisma.standup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const standupWithIdOnly = await prisma.standup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StandupFindManyArgs>(args?: SelectSubset<T, StandupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Standup.
     * @param {StandupCreateArgs} args - Arguments to create a Standup.
     * @example
     * // Create one Standup
     * const Standup = await prisma.standup.create({
     *   data: {
     *     // ... data to create a Standup
     *   }
     * })
     * 
     */
    create<T extends StandupCreateArgs>(args: SelectSubset<T, StandupCreateArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Standups.
     * @param {StandupCreateManyArgs} args - Arguments to create many Standups.
     * @example
     * // Create many Standups
     * const standup = await prisma.standup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StandupCreateManyArgs>(args?: SelectSubset<T, StandupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Standups and returns the data saved in the database.
     * @param {StandupCreateManyAndReturnArgs} args - Arguments to create many Standups.
     * @example
     * // Create many Standups
     * const standup = await prisma.standup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Standups and only return the `id`
     * const standupWithIdOnly = await prisma.standup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StandupCreateManyAndReturnArgs>(args?: SelectSubset<T, StandupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Standup.
     * @param {StandupDeleteArgs} args - Arguments to delete one Standup.
     * @example
     * // Delete one Standup
     * const Standup = await prisma.standup.delete({
     *   where: {
     *     // ... filter to delete one Standup
     *   }
     * })
     * 
     */
    delete<T extends StandupDeleteArgs>(args: SelectSubset<T, StandupDeleteArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Standup.
     * @param {StandupUpdateArgs} args - Arguments to update one Standup.
     * @example
     * // Update one Standup
     * const standup = await prisma.standup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StandupUpdateArgs>(args: SelectSubset<T, StandupUpdateArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Standups.
     * @param {StandupDeleteManyArgs} args - Arguments to filter Standups to delete.
     * @example
     * // Delete a few Standups
     * const { count } = await prisma.standup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StandupDeleteManyArgs>(args?: SelectSubset<T, StandupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Standups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Standups
     * const standup = await prisma.standup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StandupUpdateManyArgs>(args: SelectSubset<T, StandupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Standups and returns the data updated in the database.
     * @param {StandupUpdateManyAndReturnArgs} args - Arguments to update many Standups.
     * @example
     * // Update many Standups
     * const standup = await prisma.standup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Standups and only return the `id`
     * const standupWithIdOnly = await prisma.standup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StandupUpdateManyAndReturnArgs>(args: SelectSubset<T, StandupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Standup.
     * @param {StandupUpsertArgs} args - Arguments to update or create a Standup.
     * @example
     * // Update or create a Standup
     * const standup = await prisma.standup.upsert({
     *   create: {
     *     // ... data to create a Standup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Standup we want to update
     *   }
     * })
     */
    upsert<T extends StandupUpsertArgs>(args: SelectSubset<T, StandupUpsertArgs<ExtArgs>>): Prisma__StandupClient<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Standups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupCountArgs} args - Arguments to filter Standups to count.
     * @example
     * // Count the number of Standups
     * const count = await prisma.standup.count({
     *   where: {
     *     // ... the filter for the Standups we want to count
     *   }
     * })
    **/
    count<T extends StandupCountArgs>(
      args?: Subset<T, StandupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Standup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StandupAggregateArgs>(args: Subset<T, StandupAggregateArgs>): Prisma.PrismaPromise<GetStandupAggregateType<T>>

    /**
     * Group by Standup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StandupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandupGroupByArgs['orderBy'] }
        : { orderBy?: StandupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StandupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStandupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Standup model
   */
  readonly fields: StandupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Standup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Standup$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Standup$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Standup model
   */
  interface StandupFieldRefs {
    readonly id: FieldRef<"Standup", 'String'>
    readonly userId: FieldRef<"Standup", 'String'>
    readonly teamId: FieldRef<"Standup", 'String'>
    readonly yesterday: FieldRef<"Standup", 'String'>
    readonly today: FieldRef<"Standup", 'String'>
    readonly blockers: FieldRef<"Standup", 'String'>
    readonly audioUrl: FieldRef<"Standup", 'String'>
    readonly createdAt: FieldRef<"Standup", 'DateTime'>
    readonly updatedAt: FieldRef<"Standup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Standup findUnique
   */
  export type StandupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * Filter, which Standup to fetch.
     */
    where: StandupWhereUniqueInput
  }

  /**
   * Standup findUniqueOrThrow
   */
  export type StandupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * Filter, which Standup to fetch.
     */
    where: StandupWhereUniqueInput
  }

  /**
   * Standup findFirst
   */
  export type StandupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * Filter, which Standup to fetch.
     */
    where?: StandupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Standups to fetch.
     */
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Standups.
     */
    cursor?: StandupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Standups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Standups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Standups.
     */
    distinct?: StandupScalarFieldEnum | StandupScalarFieldEnum[]
  }

  /**
   * Standup findFirstOrThrow
   */
  export type StandupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * Filter, which Standup to fetch.
     */
    where?: StandupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Standups to fetch.
     */
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Standups.
     */
    cursor?: StandupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Standups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Standups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Standups.
     */
    distinct?: StandupScalarFieldEnum | StandupScalarFieldEnum[]
  }

  /**
   * Standup findMany
   */
  export type StandupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * Filter, which Standups to fetch.
     */
    where?: StandupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Standups to fetch.
     */
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Standups.
     */
    cursor?: StandupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Standups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Standups.
     */
    skip?: number
    distinct?: StandupScalarFieldEnum | StandupScalarFieldEnum[]
  }

  /**
   * Standup create
   */
  export type StandupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * The data needed to create a Standup.
     */
    data: XOR<StandupCreateInput, StandupUncheckedCreateInput>
  }

  /**
   * Standup createMany
   */
  export type StandupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Standups.
     */
    data: StandupCreateManyInput | StandupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Standup createManyAndReturn
   */
  export type StandupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * The data used to create many Standups.
     */
    data: StandupCreateManyInput | StandupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Standup update
   */
  export type StandupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * The data needed to update a Standup.
     */
    data: XOR<StandupUpdateInput, StandupUncheckedUpdateInput>
    /**
     * Choose, which Standup to update.
     */
    where: StandupWhereUniqueInput
  }

  /**
   * Standup updateMany
   */
  export type StandupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Standups.
     */
    data: XOR<StandupUpdateManyMutationInput, StandupUncheckedUpdateManyInput>
    /**
     * Filter which Standups to update
     */
    where?: StandupWhereInput
    /**
     * Limit how many Standups to update.
     */
    limit?: number
  }

  /**
   * Standup updateManyAndReturn
   */
  export type StandupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * The data used to update Standups.
     */
    data: XOR<StandupUpdateManyMutationInput, StandupUncheckedUpdateManyInput>
    /**
     * Filter which Standups to update
     */
    where?: StandupWhereInput
    /**
     * Limit how many Standups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Standup upsert
   */
  export type StandupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * The filter to search for the Standup to update in case it exists.
     */
    where: StandupWhereUniqueInput
    /**
     * In case the Standup found by the `where` argument doesn't exist, create a new Standup with this data.
     */
    create: XOR<StandupCreateInput, StandupUncheckedCreateInput>
    /**
     * In case the Standup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandupUpdateInput, StandupUncheckedUpdateInput>
  }

  /**
   * Standup delete
   */
  export type StandupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    /**
     * Filter which Standup to delete.
     */
    where: StandupWhereUniqueInput
  }

  /**
   * Standup deleteMany
   */
  export type StandupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Standups to delete
     */
    where?: StandupWhereInput
    /**
     * Limit how many Standups to delete.
     */
    limit?: number
  }

  /**
   * Standup.tags
   */
  export type Standup$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Standup without action
   */
  export type StandupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    standups?: boolean | Tag$standupsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    standups?: boolean | Tag$standupsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      standups: Prisma.$StandupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    standups<T extends Tag$standupsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$standupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.standups
   */
  export type Tag$standupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Standup
     */
    select?: StandupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Standup
     */
    omit?: StandupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandupInclude<ExtArgs> | null
    where?: StandupWhereInput
    orderBy?: StandupOrderByWithRelationInput | StandupOrderByWithRelationInput[]
    cursor?: StandupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StandupScalarFieldEnum | StandupScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model PairProgrammingSession
   */

  export type AggregatePairProgrammingSession = {
    _count: PairProgrammingSessionCountAggregateOutputType | null
    _min: PairProgrammingSessionMinAggregateOutputType | null
    _max: PairProgrammingSessionMaxAggregateOutputType | null
  }

  export type PairProgrammingSessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    teamId: string | null
    status: string | null
    startTime: Date | null
    endTime: Date | null
    recordingUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PairProgrammingSessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    teamId: string | null
    status: string | null
    startTime: Date | null
    endTime: Date | null
    recordingUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PairProgrammingSessionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    teamId: number
    status: number
    startTime: number
    endTime: number
    recordingUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PairProgrammingSessionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teamId?: true
    status?: true
    startTime?: true
    endTime?: true
    recordingUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PairProgrammingSessionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teamId?: true
    status?: true
    startTime?: true
    endTime?: true
    recordingUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PairProgrammingSessionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teamId?: true
    status?: true
    startTime?: true
    endTime?: true
    recordingUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PairProgrammingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairProgrammingSession to aggregate.
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairProgrammingSessions to fetch.
     */
    orderBy?: PairProgrammingSessionOrderByWithRelationInput | PairProgrammingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairProgrammingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairProgrammingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairProgrammingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PairProgrammingSessions
    **/
    _count?: true | PairProgrammingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairProgrammingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairProgrammingSessionMaxAggregateInputType
  }

  export type GetPairProgrammingSessionAggregateType<T extends PairProgrammingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePairProgrammingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePairProgrammingSession[P]>
      : GetScalarType<T[P], AggregatePairProgrammingSession[P]>
  }




  export type PairProgrammingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairProgrammingSessionWhereInput
    orderBy?: PairProgrammingSessionOrderByWithAggregationInput | PairProgrammingSessionOrderByWithAggregationInput[]
    by: PairProgrammingSessionScalarFieldEnum[] | PairProgrammingSessionScalarFieldEnum
    having?: PairProgrammingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairProgrammingSessionCountAggregateInputType | true
    _min?: PairProgrammingSessionMinAggregateInputType
    _max?: PairProgrammingSessionMaxAggregateInputType
  }

  export type PairProgrammingSessionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    teamId: string
    status: string
    startTime: Date
    endTime: Date | null
    recordingUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PairProgrammingSessionCountAggregateOutputType | null
    _min: PairProgrammingSessionMinAggregateOutputType | null
    _max: PairProgrammingSessionMaxAggregateOutputType | null
  }

  type GetPairProgrammingSessionGroupByPayload<T extends PairProgrammingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PairProgrammingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairProgrammingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairProgrammingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PairProgrammingSessionGroupByOutputType[P]>
        }
      >
    >


  export type PairProgrammingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    teamId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    recordingUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    participants?: boolean | PairProgrammingSession$participantsArgs<ExtArgs>
    _count?: boolean | PairProgrammingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairProgrammingSession"]>

  export type PairProgrammingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    teamId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    recordingUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairProgrammingSession"]>

  export type PairProgrammingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    teamId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    recordingUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairProgrammingSession"]>

  export type PairProgrammingSessionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    teamId?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    recordingUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PairProgrammingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "teamId" | "status" | "startTime" | "endTime" | "recordingUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["pairProgrammingSession"]>
  export type PairProgrammingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    participants?: boolean | PairProgrammingSession$participantsArgs<ExtArgs>
    _count?: boolean | PairProgrammingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PairProgrammingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PairProgrammingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PairProgrammingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PairProgrammingSession"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      participants: Prisma.$PairSessionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      teamId: string
      status: string
      startTime: Date
      endTime: Date | null
      recordingUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pairProgrammingSession"]>
    composites: {}
  }

  type PairProgrammingSessionGetPayload<S extends boolean | null | undefined | PairProgrammingSessionDefaultArgs> = $Result.GetResult<Prisma.$PairProgrammingSessionPayload, S>

  type PairProgrammingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PairProgrammingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PairProgrammingSessionCountAggregateInputType | true
    }

  export interface PairProgrammingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PairProgrammingSession'], meta: { name: 'PairProgrammingSession' } }
    /**
     * Find zero or one PairProgrammingSession that matches the filter.
     * @param {PairProgrammingSessionFindUniqueArgs} args - Arguments to find a PairProgrammingSession
     * @example
     * // Get one PairProgrammingSession
     * const pairProgrammingSession = await prisma.pairProgrammingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PairProgrammingSessionFindUniqueArgs>(args: SelectSubset<T, PairProgrammingSessionFindUniqueArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PairProgrammingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PairProgrammingSessionFindUniqueOrThrowArgs} args - Arguments to find a PairProgrammingSession
     * @example
     * // Get one PairProgrammingSession
     * const pairProgrammingSession = await prisma.pairProgrammingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PairProgrammingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PairProgrammingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PairProgrammingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionFindFirstArgs} args - Arguments to find a PairProgrammingSession
     * @example
     * // Get one PairProgrammingSession
     * const pairProgrammingSession = await prisma.pairProgrammingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PairProgrammingSessionFindFirstArgs>(args?: SelectSubset<T, PairProgrammingSessionFindFirstArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PairProgrammingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionFindFirstOrThrowArgs} args - Arguments to find a PairProgrammingSession
     * @example
     * // Get one PairProgrammingSession
     * const pairProgrammingSession = await prisma.pairProgrammingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PairProgrammingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PairProgrammingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PairProgrammingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PairProgrammingSessions
     * const pairProgrammingSessions = await prisma.pairProgrammingSession.findMany()
     * 
     * // Get first 10 PairProgrammingSessions
     * const pairProgrammingSessions = await prisma.pairProgrammingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pairProgrammingSessionWithIdOnly = await prisma.pairProgrammingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PairProgrammingSessionFindManyArgs>(args?: SelectSubset<T, PairProgrammingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PairProgrammingSession.
     * @param {PairProgrammingSessionCreateArgs} args - Arguments to create a PairProgrammingSession.
     * @example
     * // Create one PairProgrammingSession
     * const PairProgrammingSession = await prisma.pairProgrammingSession.create({
     *   data: {
     *     // ... data to create a PairProgrammingSession
     *   }
     * })
     * 
     */
    create<T extends PairProgrammingSessionCreateArgs>(args: SelectSubset<T, PairProgrammingSessionCreateArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PairProgrammingSessions.
     * @param {PairProgrammingSessionCreateManyArgs} args - Arguments to create many PairProgrammingSessions.
     * @example
     * // Create many PairProgrammingSessions
     * const pairProgrammingSession = await prisma.pairProgrammingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PairProgrammingSessionCreateManyArgs>(args?: SelectSubset<T, PairProgrammingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PairProgrammingSessions and returns the data saved in the database.
     * @param {PairProgrammingSessionCreateManyAndReturnArgs} args - Arguments to create many PairProgrammingSessions.
     * @example
     * // Create many PairProgrammingSessions
     * const pairProgrammingSession = await prisma.pairProgrammingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PairProgrammingSessions and only return the `id`
     * const pairProgrammingSessionWithIdOnly = await prisma.pairProgrammingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PairProgrammingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PairProgrammingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PairProgrammingSession.
     * @param {PairProgrammingSessionDeleteArgs} args - Arguments to delete one PairProgrammingSession.
     * @example
     * // Delete one PairProgrammingSession
     * const PairProgrammingSession = await prisma.pairProgrammingSession.delete({
     *   where: {
     *     // ... filter to delete one PairProgrammingSession
     *   }
     * })
     * 
     */
    delete<T extends PairProgrammingSessionDeleteArgs>(args: SelectSubset<T, PairProgrammingSessionDeleteArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PairProgrammingSession.
     * @param {PairProgrammingSessionUpdateArgs} args - Arguments to update one PairProgrammingSession.
     * @example
     * // Update one PairProgrammingSession
     * const pairProgrammingSession = await prisma.pairProgrammingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PairProgrammingSessionUpdateArgs>(args: SelectSubset<T, PairProgrammingSessionUpdateArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PairProgrammingSessions.
     * @param {PairProgrammingSessionDeleteManyArgs} args - Arguments to filter PairProgrammingSessions to delete.
     * @example
     * // Delete a few PairProgrammingSessions
     * const { count } = await prisma.pairProgrammingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PairProgrammingSessionDeleteManyArgs>(args?: SelectSubset<T, PairProgrammingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairProgrammingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PairProgrammingSessions
     * const pairProgrammingSession = await prisma.pairProgrammingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PairProgrammingSessionUpdateManyArgs>(args: SelectSubset<T, PairProgrammingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairProgrammingSessions and returns the data updated in the database.
     * @param {PairProgrammingSessionUpdateManyAndReturnArgs} args - Arguments to update many PairProgrammingSessions.
     * @example
     * // Update many PairProgrammingSessions
     * const pairProgrammingSession = await prisma.pairProgrammingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PairProgrammingSessions and only return the `id`
     * const pairProgrammingSessionWithIdOnly = await prisma.pairProgrammingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PairProgrammingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PairProgrammingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PairProgrammingSession.
     * @param {PairProgrammingSessionUpsertArgs} args - Arguments to update or create a PairProgrammingSession.
     * @example
     * // Update or create a PairProgrammingSession
     * const pairProgrammingSession = await prisma.pairProgrammingSession.upsert({
     *   create: {
     *     // ... data to create a PairProgrammingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PairProgrammingSession we want to update
     *   }
     * })
     */
    upsert<T extends PairProgrammingSessionUpsertArgs>(args: SelectSubset<T, PairProgrammingSessionUpsertArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PairProgrammingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionCountArgs} args - Arguments to filter PairProgrammingSessions to count.
     * @example
     * // Count the number of PairProgrammingSessions
     * const count = await prisma.pairProgrammingSession.count({
     *   where: {
     *     // ... the filter for the PairProgrammingSessions we want to count
     *   }
     * })
    **/
    count<T extends PairProgrammingSessionCountArgs>(
      args?: Subset<T, PairProgrammingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairProgrammingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PairProgrammingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PairProgrammingSessionAggregateArgs>(args: Subset<T, PairProgrammingSessionAggregateArgs>): Prisma.PrismaPromise<GetPairProgrammingSessionAggregateType<T>>

    /**
     * Group by PairProgrammingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairProgrammingSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PairProgrammingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairProgrammingSessionGroupByArgs['orderBy'] }
        : { orderBy?: PairProgrammingSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PairProgrammingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairProgrammingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PairProgrammingSession model
   */
  readonly fields: PairProgrammingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PairProgrammingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PairProgrammingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends PairProgrammingSession$participantsArgs<ExtArgs> = {}>(args?: Subset<T, PairProgrammingSession$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PairProgrammingSession model
   */
  interface PairProgrammingSessionFieldRefs {
    readonly id: FieldRef<"PairProgrammingSession", 'String'>
    readonly title: FieldRef<"PairProgrammingSession", 'String'>
    readonly description: FieldRef<"PairProgrammingSession", 'String'>
    readonly teamId: FieldRef<"PairProgrammingSession", 'String'>
    readonly status: FieldRef<"PairProgrammingSession", 'String'>
    readonly startTime: FieldRef<"PairProgrammingSession", 'DateTime'>
    readonly endTime: FieldRef<"PairProgrammingSession", 'DateTime'>
    readonly recordingUrl: FieldRef<"PairProgrammingSession", 'String'>
    readonly createdAt: FieldRef<"PairProgrammingSession", 'DateTime'>
    readonly updatedAt: FieldRef<"PairProgrammingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PairProgrammingSession findUnique
   */
  export type PairProgrammingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairProgrammingSession to fetch.
     */
    where: PairProgrammingSessionWhereUniqueInput
  }

  /**
   * PairProgrammingSession findUniqueOrThrow
   */
  export type PairProgrammingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairProgrammingSession to fetch.
     */
    where: PairProgrammingSessionWhereUniqueInput
  }

  /**
   * PairProgrammingSession findFirst
   */
  export type PairProgrammingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairProgrammingSession to fetch.
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairProgrammingSessions to fetch.
     */
    orderBy?: PairProgrammingSessionOrderByWithRelationInput | PairProgrammingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairProgrammingSessions.
     */
    cursor?: PairProgrammingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairProgrammingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairProgrammingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairProgrammingSessions.
     */
    distinct?: PairProgrammingSessionScalarFieldEnum | PairProgrammingSessionScalarFieldEnum[]
  }

  /**
   * PairProgrammingSession findFirstOrThrow
   */
  export type PairProgrammingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairProgrammingSession to fetch.
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairProgrammingSessions to fetch.
     */
    orderBy?: PairProgrammingSessionOrderByWithRelationInput | PairProgrammingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairProgrammingSessions.
     */
    cursor?: PairProgrammingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairProgrammingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairProgrammingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairProgrammingSessions.
     */
    distinct?: PairProgrammingSessionScalarFieldEnum | PairProgrammingSessionScalarFieldEnum[]
  }

  /**
   * PairProgrammingSession findMany
   */
  export type PairProgrammingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairProgrammingSessions to fetch.
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairProgrammingSessions to fetch.
     */
    orderBy?: PairProgrammingSessionOrderByWithRelationInput | PairProgrammingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PairProgrammingSessions.
     */
    cursor?: PairProgrammingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairProgrammingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairProgrammingSessions.
     */
    skip?: number
    distinct?: PairProgrammingSessionScalarFieldEnum | PairProgrammingSessionScalarFieldEnum[]
  }

  /**
   * PairProgrammingSession create
   */
  export type PairProgrammingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PairProgrammingSession.
     */
    data: XOR<PairProgrammingSessionCreateInput, PairProgrammingSessionUncheckedCreateInput>
  }

  /**
   * PairProgrammingSession createMany
   */
  export type PairProgrammingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PairProgrammingSessions.
     */
    data: PairProgrammingSessionCreateManyInput | PairProgrammingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PairProgrammingSession createManyAndReturn
   */
  export type PairProgrammingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PairProgrammingSessions.
     */
    data: PairProgrammingSessionCreateManyInput | PairProgrammingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PairProgrammingSession update
   */
  export type PairProgrammingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PairProgrammingSession.
     */
    data: XOR<PairProgrammingSessionUpdateInput, PairProgrammingSessionUncheckedUpdateInput>
    /**
     * Choose, which PairProgrammingSession to update.
     */
    where: PairProgrammingSessionWhereUniqueInput
  }

  /**
   * PairProgrammingSession updateMany
   */
  export type PairProgrammingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PairProgrammingSessions.
     */
    data: XOR<PairProgrammingSessionUpdateManyMutationInput, PairProgrammingSessionUncheckedUpdateManyInput>
    /**
     * Filter which PairProgrammingSessions to update
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * Limit how many PairProgrammingSessions to update.
     */
    limit?: number
  }

  /**
   * PairProgrammingSession updateManyAndReturn
   */
  export type PairProgrammingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * The data used to update PairProgrammingSessions.
     */
    data: XOR<PairProgrammingSessionUpdateManyMutationInput, PairProgrammingSessionUncheckedUpdateManyInput>
    /**
     * Filter which PairProgrammingSessions to update
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * Limit how many PairProgrammingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PairProgrammingSession upsert
   */
  export type PairProgrammingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PairProgrammingSession to update in case it exists.
     */
    where: PairProgrammingSessionWhereUniqueInput
    /**
     * In case the PairProgrammingSession found by the `where` argument doesn't exist, create a new PairProgrammingSession with this data.
     */
    create: XOR<PairProgrammingSessionCreateInput, PairProgrammingSessionUncheckedCreateInput>
    /**
     * In case the PairProgrammingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairProgrammingSessionUpdateInput, PairProgrammingSessionUncheckedUpdateInput>
  }

  /**
   * PairProgrammingSession delete
   */
  export type PairProgrammingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
    /**
     * Filter which PairProgrammingSession to delete.
     */
    where: PairProgrammingSessionWhereUniqueInput
  }

  /**
   * PairProgrammingSession deleteMany
   */
  export type PairProgrammingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairProgrammingSessions to delete
     */
    where?: PairProgrammingSessionWhereInput
    /**
     * Limit how many PairProgrammingSessions to delete.
     */
    limit?: number
  }

  /**
   * PairProgrammingSession.participants
   */
  export type PairProgrammingSession$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    where?: PairSessionParticipantWhereInput
    orderBy?: PairSessionParticipantOrderByWithRelationInput | PairSessionParticipantOrderByWithRelationInput[]
    cursor?: PairSessionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairSessionParticipantScalarFieldEnum | PairSessionParticipantScalarFieldEnum[]
  }

  /**
   * PairProgrammingSession without action
   */
  export type PairProgrammingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairProgrammingSession
     */
    select?: PairProgrammingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairProgrammingSession
     */
    omit?: PairProgrammingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairProgrammingSessionInclude<ExtArgs> | null
  }


  /**
   * Model TeamInvitation
   */

  export type AggregateTeamInvitation = {
    _count: TeamInvitationCountAggregateOutputType | null
    _min: TeamInvitationMinAggregateOutputType | null
    _max: TeamInvitationMaxAggregateOutputType | null
  }

  export type TeamInvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    teamId: string | null
    status: string | null
    role: string | null
    invitedBy: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamInvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    teamId: string | null
    status: string | null
    role: string | null
    invitedBy: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamInvitationCountAggregateOutputType = {
    id: number
    email: number
    teamId: number
    status: number
    role: number
    invitedBy: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamInvitationMinAggregateInputType = {
    id?: true
    email?: true
    teamId?: true
    status?: true
    role?: true
    invitedBy?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamInvitationMaxAggregateInputType = {
    id?: true
    email?: true
    teamId?: true
    status?: true
    role?: true
    invitedBy?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamInvitationCountAggregateInputType = {
    id?: true
    email?: true
    teamId?: true
    status?: true
    role?: true
    invitedBy?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamInvitation to aggregate.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamInvitations
    **/
    _count?: true | TeamInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamInvitationMaxAggregateInputType
  }

  export type GetTeamInvitationAggregateType<T extends TeamInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamInvitation[P]>
      : GetScalarType<T[P], AggregateTeamInvitation[P]>
  }




  export type TeamInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamInvitationWhereInput
    orderBy?: TeamInvitationOrderByWithAggregationInput | TeamInvitationOrderByWithAggregationInput[]
    by: TeamInvitationScalarFieldEnum[] | TeamInvitationScalarFieldEnum
    having?: TeamInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamInvitationCountAggregateInputType | true
    _min?: TeamInvitationMinAggregateInputType
    _max?: TeamInvitationMaxAggregateInputType
  }

  export type TeamInvitationGroupByOutputType = {
    id: string
    email: string
    teamId: string
    status: string
    role: string
    invitedBy: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: TeamInvitationCountAggregateOutputType | null
    _min: TeamInvitationMinAggregateOutputType | null
    _max: TeamInvitationMaxAggregateOutputType | null
  }

  type GetTeamInvitationGroupByPayload<T extends TeamInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], TeamInvitationGroupByOutputType[P]>
        }
      >
    >


  export type TeamInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    teamId?: boolean
    status?: boolean
    role?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamInvitation"]>

  export type TeamInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    teamId?: boolean
    status?: boolean
    role?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamInvitation"]>

  export type TeamInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    teamId?: boolean
    status?: boolean
    role?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamInvitation"]>

  export type TeamInvitationSelectScalar = {
    id?: boolean
    email?: boolean
    teamId?: boolean
    status?: boolean
    role?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "teamId" | "status" | "role" | "invitedBy" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["teamInvitation"]>
  export type TeamInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamInvitation"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      teamId: string
      status: string
      role: string
      invitedBy: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamInvitation"]>
    composites: {}
  }

  type TeamInvitationGetPayload<S extends boolean | null | undefined | TeamInvitationDefaultArgs> = $Result.GetResult<Prisma.$TeamInvitationPayload, S>

  type TeamInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamInvitationCountAggregateInputType | true
    }

  export interface TeamInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamInvitation'], meta: { name: 'TeamInvitation' } }
    /**
     * Find zero or one TeamInvitation that matches the filter.
     * @param {TeamInvitationFindUniqueArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamInvitationFindUniqueArgs>(args: SelectSubset<T, TeamInvitationFindUniqueArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamInvitationFindUniqueOrThrowArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationFindFirstArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamInvitationFindFirstArgs>(args?: SelectSubset<T, TeamInvitationFindFirstArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationFindFirstOrThrowArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamInvitations
     * const teamInvitations = await prisma.teamInvitation.findMany()
     * 
     * // Get first 10 TeamInvitations
     * const teamInvitations = await prisma.teamInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamInvitationWithIdOnly = await prisma.teamInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamInvitationFindManyArgs>(args?: SelectSubset<T, TeamInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamInvitation.
     * @param {TeamInvitationCreateArgs} args - Arguments to create a TeamInvitation.
     * @example
     * // Create one TeamInvitation
     * const TeamInvitation = await prisma.teamInvitation.create({
     *   data: {
     *     // ... data to create a TeamInvitation
     *   }
     * })
     * 
     */
    create<T extends TeamInvitationCreateArgs>(args: SelectSubset<T, TeamInvitationCreateArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamInvitations.
     * @param {TeamInvitationCreateManyArgs} args - Arguments to create many TeamInvitations.
     * @example
     * // Create many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamInvitationCreateManyArgs>(args?: SelectSubset<T, TeamInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamInvitations and returns the data saved in the database.
     * @param {TeamInvitationCreateManyAndReturnArgs} args - Arguments to create many TeamInvitations.
     * @example
     * // Create many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamInvitations and only return the `id`
     * const teamInvitationWithIdOnly = await prisma.teamInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamInvitation.
     * @param {TeamInvitationDeleteArgs} args - Arguments to delete one TeamInvitation.
     * @example
     * // Delete one TeamInvitation
     * const TeamInvitation = await prisma.teamInvitation.delete({
     *   where: {
     *     // ... filter to delete one TeamInvitation
     *   }
     * })
     * 
     */
    delete<T extends TeamInvitationDeleteArgs>(args: SelectSubset<T, TeamInvitationDeleteArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamInvitation.
     * @param {TeamInvitationUpdateArgs} args - Arguments to update one TeamInvitation.
     * @example
     * // Update one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamInvitationUpdateArgs>(args: SelectSubset<T, TeamInvitationUpdateArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamInvitations.
     * @param {TeamInvitationDeleteManyArgs} args - Arguments to filter TeamInvitations to delete.
     * @example
     * // Delete a few TeamInvitations
     * const { count } = await prisma.teamInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamInvitationDeleteManyArgs>(args?: SelectSubset<T, TeamInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamInvitationUpdateManyArgs>(args: SelectSubset<T, TeamInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamInvitations and returns the data updated in the database.
     * @param {TeamInvitationUpdateManyAndReturnArgs} args - Arguments to update many TeamInvitations.
     * @example
     * // Update many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamInvitations and only return the `id`
     * const teamInvitationWithIdOnly = await prisma.teamInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamInvitation.
     * @param {TeamInvitationUpsertArgs} args - Arguments to update or create a TeamInvitation.
     * @example
     * // Update or create a TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.upsert({
     *   create: {
     *     // ... data to create a TeamInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamInvitation we want to update
     *   }
     * })
     */
    upsert<T extends TeamInvitationUpsertArgs>(args: SelectSubset<T, TeamInvitationUpsertArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationCountArgs} args - Arguments to filter TeamInvitations to count.
     * @example
     * // Count the number of TeamInvitations
     * const count = await prisma.teamInvitation.count({
     *   where: {
     *     // ... the filter for the TeamInvitations we want to count
     *   }
     * })
    **/
    count<T extends TeamInvitationCountArgs>(
      args?: Subset<T, TeamInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamInvitationAggregateArgs>(args: Subset<T, TeamInvitationAggregateArgs>): Prisma.PrismaPromise<GetTeamInvitationAggregateType<T>>

    /**
     * Group by TeamInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamInvitationGroupByArgs['orderBy'] }
        : { orderBy?: TeamInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamInvitation model
   */
  readonly fields: TeamInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamInvitation model
   */
  interface TeamInvitationFieldRefs {
    readonly id: FieldRef<"TeamInvitation", 'String'>
    readonly email: FieldRef<"TeamInvitation", 'String'>
    readonly teamId: FieldRef<"TeamInvitation", 'String'>
    readonly status: FieldRef<"TeamInvitation", 'String'>
    readonly role: FieldRef<"TeamInvitation", 'String'>
    readonly invitedBy: FieldRef<"TeamInvitation", 'String'>
    readonly expiresAt: FieldRef<"TeamInvitation", 'DateTime'>
    readonly createdAt: FieldRef<"TeamInvitation", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamInvitation findUnique
   */
  export type TeamInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation findUniqueOrThrow
   */
  export type TeamInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation findFirst
   */
  export type TeamInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamInvitations.
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamInvitations.
     */
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * TeamInvitation findFirstOrThrow
   */
  export type TeamInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamInvitations.
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamInvitations.
     */
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * TeamInvitation findMany
   */
  export type TeamInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitations to fetch.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamInvitations.
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * TeamInvitation create
   */
  export type TeamInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamInvitation.
     */
    data: XOR<TeamInvitationCreateInput, TeamInvitationUncheckedCreateInput>
  }

  /**
   * TeamInvitation createMany
   */
  export type TeamInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamInvitations.
     */
    data: TeamInvitationCreateManyInput | TeamInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamInvitation createManyAndReturn
   */
  export type TeamInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many TeamInvitations.
     */
    data: TeamInvitationCreateManyInput | TeamInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamInvitation update
   */
  export type TeamInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamInvitation.
     */
    data: XOR<TeamInvitationUpdateInput, TeamInvitationUncheckedUpdateInput>
    /**
     * Choose, which TeamInvitation to update.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation updateMany
   */
  export type TeamInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamInvitations.
     */
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyInput>
    /**
     * Filter which TeamInvitations to update
     */
    where?: TeamInvitationWhereInput
    /**
     * Limit how many TeamInvitations to update.
     */
    limit?: number
  }

  /**
   * TeamInvitation updateManyAndReturn
   */
  export type TeamInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * The data used to update TeamInvitations.
     */
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyInput>
    /**
     * Filter which TeamInvitations to update
     */
    where?: TeamInvitationWhereInput
    /**
     * Limit how many TeamInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamInvitation upsert
   */
  export type TeamInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamInvitation to update in case it exists.
     */
    where: TeamInvitationWhereUniqueInput
    /**
     * In case the TeamInvitation found by the `where` argument doesn't exist, create a new TeamInvitation with this data.
     */
    create: XOR<TeamInvitationCreateInput, TeamInvitationUncheckedCreateInput>
    /**
     * In case the TeamInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamInvitationUpdateInput, TeamInvitationUncheckedUpdateInput>
  }

  /**
   * TeamInvitation delete
   */
  export type TeamInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter which TeamInvitation to delete.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation deleteMany
   */
  export type TeamInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamInvitations to delete
     */
    where?: TeamInvitationWhereInput
    /**
     * Limit how many TeamInvitations to delete.
     */
    limit?: number
  }

  /**
   * TeamInvitation without action
   */
  export type TeamInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
  }


  /**
   * Model PairSessionParticipant
   */

  export type AggregatePairSessionParticipant = {
    _count: PairSessionParticipantCountAggregateOutputType | null
    _min: PairSessionParticipantMinAggregateOutputType | null
    _max: PairSessionParticipantMaxAggregateOutputType | null
  }

  export type PairSessionParticipantMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PairSessionParticipantMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PairSessionParticipantCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PairSessionParticipantMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PairSessionParticipantMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PairSessionParticipantCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PairSessionParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairSessionParticipant to aggregate.
     */
    where?: PairSessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairSessionParticipants to fetch.
     */
    orderBy?: PairSessionParticipantOrderByWithRelationInput | PairSessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairSessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairSessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairSessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PairSessionParticipants
    **/
    _count?: true | PairSessionParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairSessionParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairSessionParticipantMaxAggregateInputType
  }

  export type GetPairSessionParticipantAggregateType<T extends PairSessionParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregatePairSessionParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePairSessionParticipant[P]>
      : GetScalarType<T[P], AggregatePairSessionParticipant[P]>
  }




  export type PairSessionParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairSessionParticipantWhereInput
    orderBy?: PairSessionParticipantOrderByWithAggregationInput | PairSessionParticipantOrderByWithAggregationInput[]
    by: PairSessionParticipantScalarFieldEnum[] | PairSessionParticipantScalarFieldEnum
    having?: PairSessionParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairSessionParticipantCountAggregateInputType | true
    _min?: PairSessionParticipantMinAggregateInputType
    _max?: PairSessionParticipantMaxAggregateInputType
  }

  export type PairSessionParticipantGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PairSessionParticipantCountAggregateOutputType | null
    _min: PairSessionParticipantMinAggregateOutputType | null
    _max: PairSessionParticipantMaxAggregateOutputType | null
  }

  type GetPairSessionParticipantGroupByPayload<T extends PairSessionParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PairSessionParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairSessionParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairSessionParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], PairSessionParticipantGroupByOutputType[P]>
        }
      >
    >


  export type PairSessionParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | PairProgrammingSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairSessionParticipant"]>

  export type PairSessionParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | PairProgrammingSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairSessionParticipant"]>

  export type PairSessionParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | PairProgrammingSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairSessionParticipant"]>

  export type PairSessionParticipantSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PairSessionParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["pairSessionParticipant"]>
  export type PairSessionParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | PairProgrammingSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PairSessionParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | PairProgrammingSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PairSessionParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | PairProgrammingSessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PairSessionParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PairSessionParticipant"
    objects: {
      session: Prisma.$PairProgrammingSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pairSessionParticipant"]>
    composites: {}
  }

  type PairSessionParticipantGetPayload<S extends boolean | null | undefined | PairSessionParticipantDefaultArgs> = $Result.GetResult<Prisma.$PairSessionParticipantPayload, S>

  type PairSessionParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PairSessionParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PairSessionParticipantCountAggregateInputType | true
    }

  export interface PairSessionParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PairSessionParticipant'], meta: { name: 'PairSessionParticipant' } }
    /**
     * Find zero or one PairSessionParticipant that matches the filter.
     * @param {PairSessionParticipantFindUniqueArgs} args - Arguments to find a PairSessionParticipant
     * @example
     * // Get one PairSessionParticipant
     * const pairSessionParticipant = await prisma.pairSessionParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PairSessionParticipantFindUniqueArgs>(args: SelectSubset<T, PairSessionParticipantFindUniqueArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PairSessionParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PairSessionParticipantFindUniqueOrThrowArgs} args - Arguments to find a PairSessionParticipant
     * @example
     * // Get one PairSessionParticipant
     * const pairSessionParticipant = await prisma.pairSessionParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PairSessionParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, PairSessionParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PairSessionParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantFindFirstArgs} args - Arguments to find a PairSessionParticipant
     * @example
     * // Get one PairSessionParticipant
     * const pairSessionParticipant = await prisma.pairSessionParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PairSessionParticipantFindFirstArgs>(args?: SelectSubset<T, PairSessionParticipantFindFirstArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PairSessionParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantFindFirstOrThrowArgs} args - Arguments to find a PairSessionParticipant
     * @example
     * // Get one PairSessionParticipant
     * const pairSessionParticipant = await prisma.pairSessionParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PairSessionParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, PairSessionParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PairSessionParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PairSessionParticipants
     * const pairSessionParticipants = await prisma.pairSessionParticipant.findMany()
     * 
     * // Get first 10 PairSessionParticipants
     * const pairSessionParticipants = await prisma.pairSessionParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pairSessionParticipantWithIdOnly = await prisma.pairSessionParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PairSessionParticipantFindManyArgs>(args?: SelectSubset<T, PairSessionParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PairSessionParticipant.
     * @param {PairSessionParticipantCreateArgs} args - Arguments to create a PairSessionParticipant.
     * @example
     * // Create one PairSessionParticipant
     * const PairSessionParticipant = await prisma.pairSessionParticipant.create({
     *   data: {
     *     // ... data to create a PairSessionParticipant
     *   }
     * })
     * 
     */
    create<T extends PairSessionParticipantCreateArgs>(args: SelectSubset<T, PairSessionParticipantCreateArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PairSessionParticipants.
     * @param {PairSessionParticipantCreateManyArgs} args - Arguments to create many PairSessionParticipants.
     * @example
     * // Create many PairSessionParticipants
     * const pairSessionParticipant = await prisma.pairSessionParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PairSessionParticipantCreateManyArgs>(args?: SelectSubset<T, PairSessionParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PairSessionParticipants and returns the data saved in the database.
     * @param {PairSessionParticipantCreateManyAndReturnArgs} args - Arguments to create many PairSessionParticipants.
     * @example
     * // Create many PairSessionParticipants
     * const pairSessionParticipant = await prisma.pairSessionParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PairSessionParticipants and only return the `id`
     * const pairSessionParticipantWithIdOnly = await prisma.pairSessionParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PairSessionParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, PairSessionParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PairSessionParticipant.
     * @param {PairSessionParticipantDeleteArgs} args - Arguments to delete one PairSessionParticipant.
     * @example
     * // Delete one PairSessionParticipant
     * const PairSessionParticipant = await prisma.pairSessionParticipant.delete({
     *   where: {
     *     // ... filter to delete one PairSessionParticipant
     *   }
     * })
     * 
     */
    delete<T extends PairSessionParticipantDeleteArgs>(args: SelectSubset<T, PairSessionParticipantDeleteArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PairSessionParticipant.
     * @param {PairSessionParticipantUpdateArgs} args - Arguments to update one PairSessionParticipant.
     * @example
     * // Update one PairSessionParticipant
     * const pairSessionParticipant = await prisma.pairSessionParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PairSessionParticipantUpdateArgs>(args: SelectSubset<T, PairSessionParticipantUpdateArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PairSessionParticipants.
     * @param {PairSessionParticipantDeleteManyArgs} args - Arguments to filter PairSessionParticipants to delete.
     * @example
     * // Delete a few PairSessionParticipants
     * const { count } = await prisma.pairSessionParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PairSessionParticipantDeleteManyArgs>(args?: SelectSubset<T, PairSessionParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairSessionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PairSessionParticipants
     * const pairSessionParticipant = await prisma.pairSessionParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PairSessionParticipantUpdateManyArgs>(args: SelectSubset<T, PairSessionParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairSessionParticipants and returns the data updated in the database.
     * @param {PairSessionParticipantUpdateManyAndReturnArgs} args - Arguments to update many PairSessionParticipants.
     * @example
     * // Update many PairSessionParticipants
     * const pairSessionParticipant = await prisma.pairSessionParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PairSessionParticipants and only return the `id`
     * const pairSessionParticipantWithIdOnly = await prisma.pairSessionParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PairSessionParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, PairSessionParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PairSessionParticipant.
     * @param {PairSessionParticipantUpsertArgs} args - Arguments to update or create a PairSessionParticipant.
     * @example
     * // Update or create a PairSessionParticipant
     * const pairSessionParticipant = await prisma.pairSessionParticipant.upsert({
     *   create: {
     *     // ... data to create a PairSessionParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PairSessionParticipant we want to update
     *   }
     * })
     */
    upsert<T extends PairSessionParticipantUpsertArgs>(args: SelectSubset<T, PairSessionParticipantUpsertArgs<ExtArgs>>): Prisma__PairSessionParticipantClient<$Result.GetResult<Prisma.$PairSessionParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PairSessionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantCountArgs} args - Arguments to filter PairSessionParticipants to count.
     * @example
     * // Count the number of PairSessionParticipants
     * const count = await prisma.pairSessionParticipant.count({
     *   where: {
     *     // ... the filter for the PairSessionParticipants we want to count
     *   }
     * })
    **/
    count<T extends PairSessionParticipantCountArgs>(
      args?: Subset<T, PairSessionParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairSessionParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PairSessionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PairSessionParticipantAggregateArgs>(args: Subset<T, PairSessionParticipantAggregateArgs>): Prisma.PrismaPromise<GetPairSessionParticipantAggregateType<T>>

    /**
     * Group by PairSessionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairSessionParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PairSessionParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairSessionParticipantGroupByArgs['orderBy'] }
        : { orderBy?: PairSessionParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PairSessionParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairSessionParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PairSessionParticipant model
   */
  readonly fields: PairSessionParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PairSessionParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PairSessionParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends PairProgrammingSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PairProgrammingSessionDefaultArgs<ExtArgs>>): Prisma__PairProgrammingSessionClient<$Result.GetResult<Prisma.$PairProgrammingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PairSessionParticipant model
   */
  interface PairSessionParticipantFieldRefs {
    readonly id: FieldRef<"PairSessionParticipant", 'String'>
    readonly sessionId: FieldRef<"PairSessionParticipant", 'String'>
    readonly userId: FieldRef<"PairSessionParticipant", 'String'>
    readonly createdAt: FieldRef<"PairSessionParticipant", 'DateTime'>
    readonly updatedAt: FieldRef<"PairSessionParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PairSessionParticipant findUnique
   */
  export type PairSessionParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PairSessionParticipant to fetch.
     */
    where: PairSessionParticipantWhereUniqueInput
  }

  /**
   * PairSessionParticipant findUniqueOrThrow
   */
  export type PairSessionParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PairSessionParticipant to fetch.
     */
    where: PairSessionParticipantWhereUniqueInput
  }

  /**
   * PairSessionParticipant findFirst
   */
  export type PairSessionParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PairSessionParticipant to fetch.
     */
    where?: PairSessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairSessionParticipants to fetch.
     */
    orderBy?: PairSessionParticipantOrderByWithRelationInput | PairSessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairSessionParticipants.
     */
    cursor?: PairSessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairSessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairSessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairSessionParticipants.
     */
    distinct?: PairSessionParticipantScalarFieldEnum | PairSessionParticipantScalarFieldEnum[]
  }

  /**
   * PairSessionParticipant findFirstOrThrow
   */
  export type PairSessionParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PairSessionParticipant to fetch.
     */
    where?: PairSessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairSessionParticipants to fetch.
     */
    orderBy?: PairSessionParticipantOrderByWithRelationInput | PairSessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairSessionParticipants.
     */
    cursor?: PairSessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairSessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairSessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairSessionParticipants.
     */
    distinct?: PairSessionParticipantScalarFieldEnum | PairSessionParticipantScalarFieldEnum[]
  }

  /**
   * PairSessionParticipant findMany
   */
  export type PairSessionParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which PairSessionParticipants to fetch.
     */
    where?: PairSessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairSessionParticipants to fetch.
     */
    orderBy?: PairSessionParticipantOrderByWithRelationInput | PairSessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PairSessionParticipants.
     */
    cursor?: PairSessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairSessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairSessionParticipants.
     */
    skip?: number
    distinct?: PairSessionParticipantScalarFieldEnum | PairSessionParticipantScalarFieldEnum[]
  }

  /**
   * PairSessionParticipant create
   */
  export type PairSessionParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a PairSessionParticipant.
     */
    data: XOR<PairSessionParticipantCreateInput, PairSessionParticipantUncheckedCreateInput>
  }

  /**
   * PairSessionParticipant createMany
   */
  export type PairSessionParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PairSessionParticipants.
     */
    data: PairSessionParticipantCreateManyInput | PairSessionParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PairSessionParticipant createManyAndReturn
   */
  export type PairSessionParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many PairSessionParticipants.
     */
    data: PairSessionParticipantCreateManyInput | PairSessionParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PairSessionParticipant update
   */
  export type PairSessionParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a PairSessionParticipant.
     */
    data: XOR<PairSessionParticipantUpdateInput, PairSessionParticipantUncheckedUpdateInput>
    /**
     * Choose, which PairSessionParticipant to update.
     */
    where: PairSessionParticipantWhereUniqueInput
  }

  /**
   * PairSessionParticipant updateMany
   */
  export type PairSessionParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PairSessionParticipants.
     */
    data: XOR<PairSessionParticipantUpdateManyMutationInput, PairSessionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which PairSessionParticipants to update
     */
    where?: PairSessionParticipantWhereInput
    /**
     * Limit how many PairSessionParticipants to update.
     */
    limit?: number
  }

  /**
   * PairSessionParticipant updateManyAndReturn
   */
  export type PairSessionParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * The data used to update PairSessionParticipants.
     */
    data: XOR<PairSessionParticipantUpdateManyMutationInput, PairSessionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which PairSessionParticipants to update
     */
    where?: PairSessionParticipantWhereInput
    /**
     * Limit how many PairSessionParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PairSessionParticipant upsert
   */
  export type PairSessionParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the PairSessionParticipant to update in case it exists.
     */
    where: PairSessionParticipantWhereUniqueInput
    /**
     * In case the PairSessionParticipant found by the `where` argument doesn't exist, create a new PairSessionParticipant with this data.
     */
    create: XOR<PairSessionParticipantCreateInput, PairSessionParticipantUncheckedCreateInput>
    /**
     * In case the PairSessionParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairSessionParticipantUpdateInput, PairSessionParticipantUncheckedUpdateInput>
  }

  /**
   * PairSessionParticipant delete
   */
  export type PairSessionParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
    /**
     * Filter which PairSessionParticipant to delete.
     */
    where: PairSessionParticipantWhereUniqueInput
  }

  /**
   * PairSessionParticipant deleteMany
   */
  export type PairSessionParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairSessionParticipants to delete
     */
    where?: PairSessionParticipantWhereInput
    /**
     * Limit how many PairSessionParticipants to delete.
     */
    limit?: number
  }

  /**
   * PairSessionParticipant without action
   */
  export type PairSessionParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairSessionParticipant
     */
    select?: PairSessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairSessionParticipant
     */
    omit?: PairSessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairSessionParticipantInclude<ExtArgs> | null
  }


  /**
   * Model PullRequest
   */

  export type AggregatePullRequest = {
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  export type PullRequestAvgAggregateOutputType = {
    number: number | null
  }

  export type PullRequestSumAggregateOutputType = {
    number: number | null
  }

  export type PullRequestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    number: number | null
    url: string | null
    status: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PullRequestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    number: number | null
    url: string | null
    status: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PullRequestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    number: number
    url: number
    status: number
    userId: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PullRequestAvgAggregateInputType = {
    number?: true
  }

  export type PullRequestSumAggregateInputType = {
    number?: true
  }

  export type PullRequestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    number?: true
    url?: true
    status?: true
    userId?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PullRequestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    number?: true
    url?: true
    status?: true
    userId?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PullRequestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    number?: true
    url?: true
    status?: true
    userId?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PullRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequest to aggregate.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullRequests
    **/
    _count?: true | PullRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PullRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PullRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullRequestMaxAggregateInputType
  }

  export type GetPullRequestAggregateType<T extends PullRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePullRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullRequest[P]>
      : GetScalarType<T[P], AggregatePullRequest[P]>
  }




  export type PullRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithAggregationInput | PullRequestOrderByWithAggregationInput[]
    by: PullRequestScalarFieldEnum[] | PullRequestScalarFieldEnum
    having?: PullRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullRequestCountAggregateInputType | true
    _avg?: PullRequestAvgAggregateInputType
    _sum?: PullRequestSumAggregateInputType
    _min?: PullRequestMinAggregateInputType
    _max?: PullRequestMaxAggregateInputType
  }

  export type PullRequestGroupByOutputType = {
    id: string
    title: string
    description: string | null
    number: number
    url: string
    status: string
    userId: string
    teamId: string
    createdAt: Date
    updatedAt: Date
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  type GetPullRequestGroupByPayload<T extends PullRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PullRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
        }
      >
    >


  export type PullRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    number?: boolean
    url?: boolean
    status?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    number?: boolean
    url?: boolean
    status?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    number?: boolean
    url?: boolean
    status?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    number?: boolean
    url?: boolean
    status?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PullRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "number" | "url" | "status" | "userId" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["pullRequest"]>
  export type PullRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PullRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PullRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PullRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PullRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      number: number
      url: string
      status: string
      userId: string
      teamId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pullRequest"]>
    composites: {}
  }

  type PullRequestGetPayload<S extends boolean | null | undefined | PullRequestDefaultArgs> = $Result.GetResult<Prisma.$PullRequestPayload, S>

  type PullRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PullRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PullRequestCountAggregateInputType | true
    }

  export interface PullRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PullRequest'], meta: { name: 'PullRequest' } }
    /**
     * Find zero or one PullRequest that matches the filter.
     * @param {PullRequestFindUniqueArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PullRequestFindUniqueArgs>(args: SelectSubset<T, PullRequestFindUniqueArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PullRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PullRequestFindUniqueOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PullRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PullRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PullRequestFindFirstArgs>(args?: SelectSubset<T, PullRequestFindFirstArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PullRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PullRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PullRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullRequests
     * const pullRequests = await prisma.pullRequest.findMany()
     * 
     * // Get first 10 PullRequests
     * const pullRequests = await prisma.pullRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PullRequestFindManyArgs>(args?: SelectSubset<T, PullRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PullRequest.
     * @param {PullRequestCreateArgs} args - Arguments to create a PullRequest.
     * @example
     * // Create one PullRequest
     * const PullRequest = await prisma.pullRequest.create({
     *   data: {
     *     // ... data to create a PullRequest
     *   }
     * })
     * 
     */
    create<T extends PullRequestCreateArgs>(args: SelectSubset<T, PullRequestCreateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PullRequests.
     * @param {PullRequestCreateManyArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PullRequestCreateManyArgs>(args?: SelectSubset<T, PullRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PullRequests and returns the data saved in the database.
     * @param {PullRequestCreateManyAndReturnArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PullRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PullRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PullRequest.
     * @param {PullRequestDeleteArgs} args - Arguments to delete one PullRequest.
     * @example
     * // Delete one PullRequest
     * const PullRequest = await prisma.pullRequest.delete({
     *   where: {
     *     // ... filter to delete one PullRequest
     *   }
     * })
     * 
     */
    delete<T extends PullRequestDeleteArgs>(args: SelectSubset<T, PullRequestDeleteArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PullRequest.
     * @param {PullRequestUpdateArgs} args - Arguments to update one PullRequest.
     * @example
     * // Update one PullRequest
     * const pullRequest = await prisma.pullRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PullRequestUpdateArgs>(args: SelectSubset<T, PullRequestUpdateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PullRequests.
     * @param {PullRequestDeleteManyArgs} args - Arguments to filter PullRequests to delete.
     * @example
     * // Delete a few PullRequests
     * const { count } = await prisma.pullRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PullRequestDeleteManyArgs>(args?: SelectSubset<T, PullRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PullRequestUpdateManyArgs>(args: SelectSubset<T, PullRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests and returns the data updated in the database.
     * @param {PullRequestUpdateManyAndReturnArgs} args - Arguments to update many PullRequests.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PullRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PullRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PullRequest.
     * @param {PullRequestUpsertArgs} args - Arguments to update or create a PullRequest.
     * @example
     * // Update or create a PullRequest
     * const pullRequest = await prisma.pullRequest.upsert({
     *   create: {
     *     // ... data to create a PullRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullRequest we want to update
     *   }
     * })
     */
    upsert<T extends PullRequestUpsertArgs>(args: SelectSubset<T, PullRequestUpsertArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestCountArgs} args - Arguments to filter PullRequests to count.
     * @example
     * // Count the number of PullRequests
     * const count = await prisma.pullRequest.count({
     *   where: {
     *     // ... the filter for the PullRequests we want to count
     *   }
     * })
    **/
    count<T extends PullRequestCountArgs>(
      args?: Subset<T, PullRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PullRequestAggregateArgs>(args: Subset<T, PullRequestAggregateArgs>): Prisma.PrismaPromise<GetPullRequestAggregateType<T>>

    /**
     * Group by PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PullRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullRequestGroupByArgs['orderBy'] }
        : { orderBy?: PullRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PullRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PullRequest model
   */
  readonly fields: PullRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PullRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PullRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PullRequest model
   */
  interface PullRequestFieldRefs {
    readonly id: FieldRef<"PullRequest", 'String'>
    readonly title: FieldRef<"PullRequest", 'String'>
    readonly description: FieldRef<"PullRequest", 'String'>
    readonly number: FieldRef<"PullRequest", 'Int'>
    readonly url: FieldRef<"PullRequest", 'String'>
    readonly status: FieldRef<"PullRequest", 'String'>
    readonly userId: FieldRef<"PullRequest", 'String'>
    readonly teamId: FieldRef<"PullRequest", 'String'>
    readonly createdAt: FieldRef<"PullRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PullRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PullRequest findUnique
   */
  export type PullRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findUniqueOrThrow
   */
  export type PullRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findFirst
   */
  export type PullRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findFirstOrThrow
   */
  export type PullRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findMany
   */
  export type PullRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequests to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest create
   */
  export type PullRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PullRequest.
     */
    data: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
  }

  /**
   * PullRequest createMany
   */
  export type PullRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PullRequest createManyAndReturn
   */
  export type PullRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest update
   */
  export type PullRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PullRequest.
     */
    data: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
    /**
     * Choose, which PullRequest to update.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest updateMany
   */
  export type PullRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to update.
     */
    limit?: number
  }

  /**
   * PullRequest updateManyAndReturn
   */
  export type PullRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest upsert
   */
  export type PullRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PullRequest to update in case it exists.
     */
    where: PullRequestWhereUniqueInput
    /**
     * In case the PullRequest found by the `where` argument doesn't exist, create a new PullRequest with this data.
     */
    create: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
    /**
     * In case the PullRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
  }

  /**
   * PullRequest delete
   */
  export type PullRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter which PullRequest to delete.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest deleteMany
   */
  export type PullRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequests to delete
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to delete.
     */
    limit?: number
  }

  /**
   * PullRequest without action
   */
  export type PullRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
  }


  /**
   * Model FocusTime
   */

  export type AggregateFocusTime = {
    _count: FocusTimeCountAggregateOutputType | null
    _avg: FocusTimeAvgAggregateOutputType | null
    _sum: FocusTimeSumAggregateOutputType | null
    _min: FocusTimeMinAggregateOutputType | null
    _max: FocusTimeMaxAggregateOutputType | null
  }

  export type FocusTimeAvgAggregateOutputType = {
    minutes: number | null
  }

  export type FocusTimeSumAggregateOutputType = {
    minutes: number | null
  }

  export type FocusTimeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    minutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FocusTimeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    minutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FocusTimeCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    minutes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FocusTimeAvgAggregateInputType = {
    minutes?: true
  }

  export type FocusTimeSumAggregateInputType = {
    minutes?: true
  }

  export type FocusTimeMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    minutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FocusTimeMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    minutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FocusTimeCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    minutes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FocusTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusTime to aggregate.
     */
    where?: FocusTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusTimes to fetch.
     */
    orderBy?: FocusTimeOrderByWithRelationInput | FocusTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FocusTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocusTimes
    **/
    _count?: true | FocusTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FocusTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FocusTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocusTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocusTimeMaxAggregateInputType
  }

  export type GetFocusTimeAggregateType<T extends FocusTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateFocusTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocusTime[P]>
      : GetScalarType<T[P], AggregateFocusTime[P]>
  }




  export type FocusTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusTimeWhereInput
    orderBy?: FocusTimeOrderByWithAggregationInput | FocusTimeOrderByWithAggregationInput[]
    by: FocusTimeScalarFieldEnum[] | FocusTimeScalarFieldEnum
    having?: FocusTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocusTimeCountAggregateInputType | true
    _avg?: FocusTimeAvgAggregateInputType
    _sum?: FocusTimeSumAggregateInputType
    _min?: FocusTimeMinAggregateInputType
    _max?: FocusTimeMaxAggregateInputType
  }

  export type FocusTimeGroupByOutputType = {
    id: string
    userId: string
    date: Date
    minutes: number
    createdAt: Date
    updatedAt: Date
    _count: FocusTimeCountAggregateOutputType | null
    _avg: FocusTimeAvgAggregateOutputType | null
    _sum: FocusTimeSumAggregateOutputType | null
    _min: FocusTimeMinAggregateOutputType | null
    _max: FocusTimeMaxAggregateOutputType | null
  }

  type GetFocusTimeGroupByPayload<T extends FocusTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FocusTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocusTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocusTimeGroupByOutputType[P]>
            : GetScalarType<T[P], FocusTimeGroupByOutputType[P]>
        }
      >
    >


  export type FocusTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    minutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusTime"]>

  export type FocusTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    minutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusTime"]>

  export type FocusTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    minutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusTime"]>

  export type FocusTimeSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    minutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FocusTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "minutes" | "createdAt" | "updatedAt", ExtArgs["result"]["focusTime"]>
  export type FocusTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FocusTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FocusTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FocusTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FocusTime"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      minutes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["focusTime"]>
    composites: {}
  }

  type FocusTimeGetPayload<S extends boolean | null | undefined | FocusTimeDefaultArgs> = $Result.GetResult<Prisma.$FocusTimePayload, S>

  type FocusTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FocusTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FocusTimeCountAggregateInputType | true
    }

  export interface FocusTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FocusTime'], meta: { name: 'FocusTime' } }
    /**
     * Find zero or one FocusTime that matches the filter.
     * @param {FocusTimeFindUniqueArgs} args - Arguments to find a FocusTime
     * @example
     * // Get one FocusTime
     * const focusTime = await prisma.focusTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FocusTimeFindUniqueArgs>(args: SelectSubset<T, FocusTimeFindUniqueArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FocusTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FocusTimeFindUniqueOrThrowArgs} args - Arguments to find a FocusTime
     * @example
     * // Get one FocusTime
     * const focusTime = await prisma.focusTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FocusTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, FocusTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeFindFirstArgs} args - Arguments to find a FocusTime
     * @example
     * // Get one FocusTime
     * const focusTime = await prisma.focusTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FocusTimeFindFirstArgs>(args?: SelectSubset<T, FocusTimeFindFirstArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeFindFirstOrThrowArgs} args - Arguments to find a FocusTime
     * @example
     * // Get one FocusTime
     * const focusTime = await prisma.focusTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FocusTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, FocusTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FocusTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocusTimes
     * const focusTimes = await prisma.focusTime.findMany()
     * 
     * // Get first 10 FocusTimes
     * const focusTimes = await prisma.focusTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focusTimeWithIdOnly = await prisma.focusTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FocusTimeFindManyArgs>(args?: SelectSubset<T, FocusTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FocusTime.
     * @param {FocusTimeCreateArgs} args - Arguments to create a FocusTime.
     * @example
     * // Create one FocusTime
     * const FocusTime = await prisma.focusTime.create({
     *   data: {
     *     // ... data to create a FocusTime
     *   }
     * })
     * 
     */
    create<T extends FocusTimeCreateArgs>(args: SelectSubset<T, FocusTimeCreateArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FocusTimes.
     * @param {FocusTimeCreateManyArgs} args - Arguments to create many FocusTimes.
     * @example
     * // Create many FocusTimes
     * const focusTime = await prisma.focusTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FocusTimeCreateManyArgs>(args?: SelectSubset<T, FocusTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FocusTimes and returns the data saved in the database.
     * @param {FocusTimeCreateManyAndReturnArgs} args - Arguments to create many FocusTimes.
     * @example
     * // Create many FocusTimes
     * const focusTime = await prisma.focusTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FocusTimes and only return the `id`
     * const focusTimeWithIdOnly = await prisma.focusTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FocusTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, FocusTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FocusTime.
     * @param {FocusTimeDeleteArgs} args - Arguments to delete one FocusTime.
     * @example
     * // Delete one FocusTime
     * const FocusTime = await prisma.focusTime.delete({
     *   where: {
     *     // ... filter to delete one FocusTime
     *   }
     * })
     * 
     */
    delete<T extends FocusTimeDeleteArgs>(args: SelectSubset<T, FocusTimeDeleteArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FocusTime.
     * @param {FocusTimeUpdateArgs} args - Arguments to update one FocusTime.
     * @example
     * // Update one FocusTime
     * const focusTime = await prisma.focusTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FocusTimeUpdateArgs>(args: SelectSubset<T, FocusTimeUpdateArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FocusTimes.
     * @param {FocusTimeDeleteManyArgs} args - Arguments to filter FocusTimes to delete.
     * @example
     * // Delete a few FocusTimes
     * const { count } = await prisma.focusTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FocusTimeDeleteManyArgs>(args?: SelectSubset<T, FocusTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocusTimes
     * const focusTime = await prisma.focusTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FocusTimeUpdateManyArgs>(args: SelectSubset<T, FocusTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusTimes and returns the data updated in the database.
     * @param {FocusTimeUpdateManyAndReturnArgs} args - Arguments to update many FocusTimes.
     * @example
     * // Update many FocusTimes
     * const focusTime = await prisma.focusTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FocusTimes and only return the `id`
     * const focusTimeWithIdOnly = await prisma.focusTime.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FocusTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, FocusTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FocusTime.
     * @param {FocusTimeUpsertArgs} args - Arguments to update or create a FocusTime.
     * @example
     * // Update or create a FocusTime
     * const focusTime = await prisma.focusTime.upsert({
     *   create: {
     *     // ... data to create a FocusTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocusTime we want to update
     *   }
     * })
     */
    upsert<T extends FocusTimeUpsertArgs>(args: SelectSubset<T, FocusTimeUpsertArgs<ExtArgs>>): Prisma__FocusTimeClient<$Result.GetResult<Prisma.$FocusTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FocusTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeCountArgs} args - Arguments to filter FocusTimes to count.
     * @example
     * // Count the number of FocusTimes
     * const count = await prisma.focusTime.count({
     *   where: {
     *     // ... the filter for the FocusTimes we want to count
     *   }
     * })
    **/
    count<T extends FocusTimeCountArgs>(
      args?: Subset<T, FocusTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocusTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocusTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FocusTimeAggregateArgs>(args: Subset<T, FocusTimeAggregateArgs>): Prisma.PrismaPromise<GetFocusTimeAggregateType<T>>

    /**
     * Group by FocusTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusTimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FocusTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocusTimeGroupByArgs['orderBy'] }
        : { orderBy?: FocusTimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FocusTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocusTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FocusTime model
   */
  readonly fields: FocusTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FocusTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FocusTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FocusTime model
   */
  interface FocusTimeFieldRefs {
    readonly id: FieldRef<"FocusTime", 'String'>
    readonly userId: FieldRef<"FocusTime", 'String'>
    readonly date: FieldRef<"FocusTime", 'DateTime'>
    readonly minutes: FieldRef<"FocusTime", 'Int'>
    readonly createdAt: FieldRef<"FocusTime", 'DateTime'>
    readonly updatedAt: FieldRef<"FocusTime", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FocusTime findUnique
   */
  export type FocusTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * Filter, which FocusTime to fetch.
     */
    where: FocusTimeWhereUniqueInput
  }

  /**
   * FocusTime findUniqueOrThrow
   */
  export type FocusTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * Filter, which FocusTime to fetch.
     */
    where: FocusTimeWhereUniqueInput
  }

  /**
   * FocusTime findFirst
   */
  export type FocusTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * Filter, which FocusTime to fetch.
     */
    where?: FocusTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusTimes to fetch.
     */
    orderBy?: FocusTimeOrderByWithRelationInput | FocusTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusTimes.
     */
    cursor?: FocusTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusTimes.
     */
    distinct?: FocusTimeScalarFieldEnum | FocusTimeScalarFieldEnum[]
  }

  /**
   * FocusTime findFirstOrThrow
   */
  export type FocusTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * Filter, which FocusTime to fetch.
     */
    where?: FocusTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusTimes to fetch.
     */
    orderBy?: FocusTimeOrderByWithRelationInput | FocusTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusTimes.
     */
    cursor?: FocusTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusTimes.
     */
    distinct?: FocusTimeScalarFieldEnum | FocusTimeScalarFieldEnum[]
  }

  /**
   * FocusTime findMany
   */
  export type FocusTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * Filter, which FocusTimes to fetch.
     */
    where?: FocusTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusTimes to fetch.
     */
    orderBy?: FocusTimeOrderByWithRelationInput | FocusTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocusTimes.
     */
    cursor?: FocusTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusTimes.
     */
    skip?: number
    distinct?: FocusTimeScalarFieldEnum | FocusTimeScalarFieldEnum[]
  }

  /**
   * FocusTime create
   */
  export type FocusTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a FocusTime.
     */
    data: XOR<FocusTimeCreateInput, FocusTimeUncheckedCreateInput>
  }

  /**
   * FocusTime createMany
   */
  export type FocusTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FocusTimes.
     */
    data: FocusTimeCreateManyInput | FocusTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FocusTime createManyAndReturn
   */
  export type FocusTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * The data used to create many FocusTimes.
     */
    data: FocusTimeCreateManyInput | FocusTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusTime update
   */
  export type FocusTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a FocusTime.
     */
    data: XOR<FocusTimeUpdateInput, FocusTimeUncheckedUpdateInput>
    /**
     * Choose, which FocusTime to update.
     */
    where: FocusTimeWhereUniqueInput
  }

  /**
   * FocusTime updateMany
   */
  export type FocusTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FocusTimes.
     */
    data: XOR<FocusTimeUpdateManyMutationInput, FocusTimeUncheckedUpdateManyInput>
    /**
     * Filter which FocusTimes to update
     */
    where?: FocusTimeWhereInput
    /**
     * Limit how many FocusTimes to update.
     */
    limit?: number
  }

  /**
   * FocusTime updateManyAndReturn
   */
  export type FocusTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * The data used to update FocusTimes.
     */
    data: XOR<FocusTimeUpdateManyMutationInput, FocusTimeUncheckedUpdateManyInput>
    /**
     * Filter which FocusTimes to update
     */
    where?: FocusTimeWhereInput
    /**
     * Limit how many FocusTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusTime upsert
   */
  export type FocusTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the FocusTime to update in case it exists.
     */
    where: FocusTimeWhereUniqueInput
    /**
     * In case the FocusTime found by the `where` argument doesn't exist, create a new FocusTime with this data.
     */
    create: XOR<FocusTimeCreateInput, FocusTimeUncheckedCreateInput>
    /**
     * In case the FocusTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FocusTimeUpdateInput, FocusTimeUncheckedUpdateInput>
  }

  /**
   * FocusTime delete
   */
  export type FocusTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
    /**
     * Filter which FocusTime to delete.
     */
    where: FocusTimeWhereUniqueInput
  }

  /**
   * FocusTime deleteMany
   */
  export type FocusTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusTimes to delete
     */
    where?: FocusTimeWhereInput
    /**
     * Limit how many FocusTimes to delete.
     */
    limit?: number
  }

  /**
   * FocusTime without action
   */
  export type FocusTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusTime
     */
    select?: FocusTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusTime
     */
    omit?: FocusTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusTimeInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: string
    status: string
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: string
      status: string
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    avatarUrl: 'avatarUrl',
    provider: 'provider',
    status: 'status',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserTeamScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserTeamScalarFieldEnum = (typeof UserTeamScalarFieldEnum)[keyof typeof UserTeamScalarFieldEnum]


  export const StandupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    yesterday: 'yesterday',
    today: 'today',
    blockers: 'blockers',
    audioUrl: 'audioUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StandupScalarFieldEnum = (typeof StandupScalarFieldEnum)[keyof typeof StandupScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PairProgrammingSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teamId: 'teamId',
    status: 'status',
    startTime: 'startTime',
    endTime: 'endTime',
    recordingUrl: 'recordingUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PairProgrammingSessionScalarFieldEnum = (typeof PairProgrammingSessionScalarFieldEnum)[keyof typeof PairProgrammingSessionScalarFieldEnum]


  export const TeamInvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    teamId: 'teamId',
    status: 'status',
    role: 'role',
    invitedBy: 'invitedBy',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamInvitationScalarFieldEnum = (typeof TeamInvitationScalarFieldEnum)[keyof typeof TeamInvitationScalarFieldEnum]


  export const PairSessionParticipantScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PairSessionParticipantScalarFieldEnum = (typeof PairSessionParticipantScalarFieldEnum)[keyof typeof PairSessionParticipantScalarFieldEnum]


  export const PullRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    number: 'number',
    url: 'url',
    status: 'status',
    userId: 'userId',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PullRequestScalarFieldEnum = (typeof PullRequestScalarFieldEnum)[keyof typeof PullRequestScalarFieldEnum]


  export const FocusTimeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    minutes: 'minutes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FocusTimeScalarFieldEnum = (typeof FocusTimeScalarFieldEnum)[keyof typeof FocusTimeScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    status?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teams?: UserTeamListRelationFilter
    standups?: StandupListRelationFilter
    pairSessions?: PairSessionParticipantListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    focusTimes?: FocusTimeListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    status?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teams?: UserTeamOrderByRelationAggregateInput
    standups?: StandupOrderByRelationAggregateInput
    pairSessions?: PairSessionParticipantOrderByRelationAggregateInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
    focusTimes?: FocusTimeOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    provider?: StringFilter<"User"> | string
    status?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teams?: UserTeamListRelationFilter
    standups?: StandupListRelationFilter
    pairSessions?: PairSessionParticipantListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    focusTimes?: FocusTimeListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    status?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringWithAggregatesFilter<"User"> | string
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: UserTeamListRelationFilter
    pairSessions?: PairProgrammingSessionListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    standups?: StandupListRelationFilter
    TeamInvitation?: TeamInvitationListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: UserTeamOrderByRelationAggregateInput
    pairSessions?: PairProgrammingSessionOrderByRelationAggregateInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
    standups?: StandupOrderByRelationAggregateInput
    TeamInvitation?: TeamInvitationOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: UserTeamListRelationFilter
    pairSessions?: PairProgrammingSessionListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    standups?: StandupListRelationFilter
    TeamInvitation?: TeamInvitationListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type UserTeamWhereInput = {
    AND?: UserTeamWhereInput | UserTeamWhereInput[]
    OR?: UserTeamWhereInput[]
    NOT?: UserTeamWhereInput | UserTeamWhereInput[]
    id?: StringFilter<"UserTeam"> | string
    userId?: StringFilter<"UserTeam"> | string
    teamId?: StringFilter<"UserTeam"> | string
    role?: StringFilter<"UserTeam"> | string
    createdAt?: DateTimeFilter<"UserTeam"> | Date | string
    updatedAt?: DateTimeFilter<"UserTeam"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type UserTeamOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type UserTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: UserTeamUserIdTeamIdCompoundUniqueInput
    AND?: UserTeamWhereInput | UserTeamWhereInput[]
    OR?: UserTeamWhereInput[]
    NOT?: UserTeamWhereInput | UserTeamWhereInput[]
    userId?: StringFilter<"UserTeam"> | string
    teamId?: StringFilter<"UserTeam"> | string
    role?: StringFilter<"UserTeam"> | string
    createdAt?: DateTimeFilter<"UserTeam"> | Date | string
    updatedAt?: DateTimeFilter<"UserTeam"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type UserTeamOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserTeamCountOrderByAggregateInput
    _max?: UserTeamMaxOrderByAggregateInput
    _min?: UserTeamMinOrderByAggregateInput
  }

  export type UserTeamScalarWhereWithAggregatesInput = {
    AND?: UserTeamScalarWhereWithAggregatesInput | UserTeamScalarWhereWithAggregatesInput[]
    OR?: UserTeamScalarWhereWithAggregatesInput[]
    NOT?: UserTeamScalarWhereWithAggregatesInput | UserTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTeam"> | string
    userId?: StringWithAggregatesFilter<"UserTeam"> | string
    teamId?: StringWithAggregatesFilter<"UserTeam"> | string
    role?: StringWithAggregatesFilter<"UserTeam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserTeam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserTeam"> | Date | string
  }

  export type StandupWhereInput = {
    AND?: StandupWhereInput | StandupWhereInput[]
    OR?: StandupWhereInput[]
    NOT?: StandupWhereInput | StandupWhereInput[]
    id?: StringFilter<"Standup"> | string
    userId?: StringFilter<"Standup"> | string
    teamId?: StringFilter<"Standup"> | string
    yesterday?: StringNullableFilter<"Standup"> | string | null
    today?: StringNullableFilter<"Standup"> | string | null
    blockers?: StringNullableFilter<"Standup"> | string | null
    audioUrl?: StringNullableFilter<"Standup"> | string | null
    createdAt?: DateTimeFilter<"Standup"> | Date | string
    updatedAt?: DateTimeFilter<"Standup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    tags?: TagListRelationFilter
  }

  export type StandupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrderInput | SortOrder
    today?: SortOrderInput | SortOrder
    blockers?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type StandupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StandupWhereInput | StandupWhereInput[]
    OR?: StandupWhereInput[]
    NOT?: StandupWhereInput | StandupWhereInput[]
    userId?: StringFilter<"Standup"> | string
    teamId?: StringFilter<"Standup"> | string
    yesterday?: StringNullableFilter<"Standup"> | string | null
    today?: StringNullableFilter<"Standup"> | string | null
    blockers?: StringNullableFilter<"Standup"> | string | null
    audioUrl?: StringNullableFilter<"Standup"> | string | null
    createdAt?: DateTimeFilter<"Standup"> | Date | string
    updatedAt?: DateTimeFilter<"Standup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    tags?: TagListRelationFilter
  }, "id">

  export type StandupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrderInput | SortOrder
    today?: SortOrderInput | SortOrder
    blockers?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StandupCountOrderByAggregateInput
    _max?: StandupMaxOrderByAggregateInput
    _min?: StandupMinOrderByAggregateInput
  }

  export type StandupScalarWhereWithAggregatesInput = {
    AND?: StandupScalarWhereWithAggregatesInput | StandupScalarWhereWithAggregatesInput[]
    OR?: StandupScalarWhereWithAggregatesInput[]
    NOT?: StandupScalarWhereWithAggregatesInput | StandupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Standup"> | string
    userId?: StringWithAggregatesFilter<"Standup"> | string
    teamId?: StringWithAggregatesFilter<"Standup"> | string
    yesterday?: StringNullableWithAggregatesFilter<"Standup"> | string | null
    today?: StringNullableWithAggregatesFilter<"Standup"> | string | null
    blockers?: StringNullableWithAggregatesFilter<"Standup"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Standup"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Standup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Standup"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    standups?: StandupListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    standups?: StandupOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    standups?: StandupListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type PairProgrammingSessionWhereInput = {
    AND?: PairProgrammingSessionWhereInput | PairProgrammingSessionWhereInput[]
    OR?: PairProgrammingSessionWhereInput[]
    NOT?: PairProgrammingSessionWhereInput | PairProgrammingSessionWhereInput[]
    id?: StringFilter<"PairProgrammingSession"> | string
    title?: StringFilter<"PairProgrammingSession"> | string
    description?: StringNullableFilter<"PairProgrammingSession"> | string | null
    teamId?: StringFilter<"PairProgrammingSession"> | string
    status?: StringFilter<"PairProgrammingSession"> | string
    startTime?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    endTime?: DateTimeNullableFilter<"PairProgrammingSession"> | Date | string | null
    recordingUrl?: StringNullableFilter<"PairProgrammingSession"> | string | null
    createdAt?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    updatedAt?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    participants?: PairSessionParticipantListRelationFilter
  }

  export type PairProgrammingSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    teamId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    participants?: PairSessionParticipantOrderByRelationAggregateInput
  }

  export type PairProgrammingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PairProgrammingSessionWhereInput | PairProgrammingSessionWhereInput[]
    OR?: PairProgrammingSessionWhereInput[]
    NOT?: PairProgrammingSessionWhereInput | PairProgrammingSessionWhereInput[]
    title?: StringFilter<"PairProgrammingSession"> | string
    description?: StringNullableFilter<"PairProgrammingSession"> | string | null
    teamId?: StringFilter<"PairProgrammingSession"> | string
    status?: StringFilter<"PairProgrammingSession"> | string
    startTime?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    endTime?: DateTimeNullableFilter<"PairProgrammingSession"> | Date | string | null
    recordingUrl?: StringNullableFilter<"PairProgrammingSession"> | string | null
    createdAt?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    updatedAt?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    participants?: PairSessionParticipantListRelationFilter
  }, "id">

  export type PairProgrammingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    teamId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PairProgrammingSessionCountOrderByAggregateInput
    _max?: PairProgrammingSessionMaxOrderByAggregateInput
    _min?: PairProgrammingSessionMinOrderByAggregateInput
  }

  export type PairProgrammingSessionScalarWhereWithAggregatesInput = {
    AND?: PairProgrammingSessionScalarWhereWithAggregatesInput | PairProgrammingSessionScalarWhereWithAggregatesInput[]
    OR?: PairProgrammingSessionScalarWhereWithAggregatesInput[]
    NOT?: PairProgrammingSessionScalarWhereWithAggregatesInput | PairProgrammingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PairProgrammingSession"> | string
    title?: StringWithAggregatesFilter<"PairProgrammingSession"> | string
    description?: StringNullableWithAggregatesFilter<"PairProgrammingSession"> | string | null
    teamId?: StringWithAggregatesFilter<"PairProgrammingSession"> | string
    status?: StringWithAggregatesFilter<"PairProgrammingSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"PairProgrammingSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"PairProgrammingSession"> | Date | string | null
    recordingUrl?: StringNullableWithAggregatesFilter<"PairProgrammingSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PairProgrammingSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PairProgrammingSession"> | Date | string
  }

  export type TeamInvitationWhereInput = {
    AND?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    OR?: TeamInvitationWhereInput[]
    NOT?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    id?: StringFilter<"TeamInvitation"> | string
    email?: StringFilter<"TeamInvitation"> | string
    teamId?: StringFilter<"TeamInvitation"> | string
    status?: StringFilter<"TeamInvitation"> | string
    role?: StringFilter<"TeamInvitation"> | string
    invitedBy?: StringFilter<"TeamInvitation"> | string
    expiresAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    createdAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamInvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type TeamInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    OR?: TeamInvitationWhereInput[]
    NOT?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    email?: StringFilter<"TeamInvitation"> | string
    teamId?: StringFilter<"TeamInvitation"> | string
    status?: StringFilter<"TeamInvitation"> | string
    role?: StringFilter<"TeamInvitation"> | string
    invitedBy?: StringFilter<"TeamInvitation"> | string
    expiresAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    createdAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type TeamInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamInvitationCountOrderByAggregateInput
    _max?: TeamInvitationMaxOrderByAggregateInput
    _min?: TeamInvitationMinOrderByAggregateInput
  }

  export type TeamInvitationScalarWhereWithAggregatesInput = {
    AND?: TeamInvitationScalarWhereWithAggregatesInput | TeamInvitationScalarWhereWithAggregatesInput[]
    OR?: TeamInvitationScalarWhereWithAggregatesInput[]
    NOT?: TeamInvitationScalarWhereWithAggregatesInput | TeamInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamInvitation"> | string
    email?: StringWithAggregatesFilter<"TeamInvitation"> | string
    teamId?: StringWithAggregatesFilter<"TeamInvitation"> | string
    status?: StringWithAggregatesFilter<"TeamInvitation"> | string
    role?: StringWithAggregatesFilter<"TeamInvitation"> | string
    invitedBy?: StringWithAggregatesFilter<"TeamInvitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"TeamInvitation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamInvitation"> | Date | string
  }

  export type PairSessionParticipantWhereInput = {
    AND?: PairSessionParticipantWhereInput | PairSessionParticipantWhereInput[]
    OR?: PairSessionParticipantWhereInput[]
    NOT?: PairSessionParticipantWhereInput | PairSessionParticipantWhereInput[]
    id?: StringFilter<"PairSessionParticipant"> | string
    sessionId?: StringFilter<"PairSessionParticipant"> | string
    userId?: StringFilter<"PairSessionParticipant"> | string
    createdAt?: DateTimeFilter<"PairSessionParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"PairSessionParticipant"> | Date | string
    session?: XOR<PairProgrammingSessionScalarRelationFilter, PairProgrammingSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PairSessionParticipantOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: PairProgrammingSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PairSessionParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_userId?: PairSessionParticipantSessionIdUserIdCompoundUniqueInput
    AND?: PairSessionParticipantWhereInput | PairSessionParticipantWhereInput[]
    OR?: PairSessionParticipantWhereInput[]
    NOT?: PairSessionParticipantWhereInput | PairSessionParticipantWhereInput[]
    sessionId?: StringFilter<"PairSessionParticipant"> | string
    userId?: StringFilter<"PairSessionParticipant"> | string
    createdAt?: DateTimeFilter<"PairSessionParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"PairSessionParticipant"> | Date | string
    session?: XOR<PairProgrammingSessionScalarRelationFilter, PairProgrammingSessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId_userId">

  export type PairSessionParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PairSessionParticipantCountOrderByAggregateInput
    _max?: PairSessionParticipantMaxOrderByAggregateInput
    _min?: PairSessionParticipantMinOrderByAggregateInput
  }

  export type PairSessionParticipantScalarWhereWithAggregatesInput = {
    AND?: PairSessionParticipantScalarWhereWithAggregatesInput | PairSessionParticipantScalarWhereWithAggregatesInput[]
    OR?: PairSessionParticipantScalarWhereWithAggregatesInput[]
    NOT?: PairSessionParticipantScalarWhereWithAggregatesInput | PairSessionParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PairSessionParticipant"> | string
    sessionId?: StringWithAggregatesFilter<"PairSessionParticipant"> | string
    userId?: StringWithAggregatesFilter<"PairSessionParticipant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PairSessionParticipant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PairSessionParticipant"> | Date | string
  }

  export type PullRequestWhereInput = {
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    title?: StringFilter<"PullRequest"> | string
    description?: StringNullableFilter<"PullRequest"> | string | null
    number?: IntFilter<"PullRequest"> | number
    url?: StringFilter<"PullRequest"> | string
    status?: StringFilter<"PullRequest"> | string
    userId?: StringFilter<"PullRequest"> | string
    teamId?: StringFilter<"PullRequest"> | string
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type PullRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    number?: SortOrder
    url?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type PullRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    title?: StringFilter<"PullRequest"> | string
    description?: StringNullableFilter<"PullRequest"> | string | null
    number?: IntFilter<"PullRequest"> | number
    url?: StringFilter<"PullRequest"> | string
    status?: StringFilter<"PullRequest"> | string
    userId?: StringFilter<"PullRequest"> | string
    teamId?: StringFilter<"PullRequest"> | string
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type PullRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    number?: SortOrder
    url?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PullRequestCountOrderByAggregateInput
    _avg?: PullRequestAvgOrderByAggregateInput
    _max?: PullRequestMaxOrderByAggregateInput
    _min?: PullRequestMinOrderByAggregateInput
    _sum?: PullRequestSumOrderByAggregateInput
  }

  export type PullRequestScalarWhereWithAggregatesInput = {
    AND?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    OR?: PullRequestScalarWhereWithAggregatesInput[]
    NOT?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PullRequest"> | string
    title?: StringWithAggregatesFilter<"PullRequest"> | string
    description?: StringNullableWithAggregatesFilter<"PullRequest"> | string | null
    number?: IntWithAggregatesFilter<"PullRequest"> | number
    url?: StringWithAggregatesFilter<"PullRequest"> | string
    status?: StringWithAggregatesFilter<"PullRequest"> | string
    userId?: StringWithAggregatesFilter<"PullRequest"> | string
    teamId?: StringWithAggregatesFilter<"PullRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
  }

  export type FocusTimeWhereInput = {
    AND?: FocusTimeWhereInput | FocusTimeWhereInput[]
    OR?: FocusTimeWhereInput[]
    NOT?: FocusTimeWhereInput | FocusTimeWhereInput[]
    id?: StringFilter<"FocusTime"> | string
    userId?: StringFilter<"FocusTime"> | string
    date?: DateTimeFilter<"FocusTime"> | Date | string
    minutes?: IntFilter<"FocusTime"> | number
    createdAt?: DateTimeFilter<"FocusTime"> | Date | string
    updatedAt?: DateTimeFilter<"FocusTime"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FocusTimeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    minutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FocusTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FocusTimeWhereInput | FocusTimeWhereInput[]
    OR?: FocusTimeWhereInput[]
    NOT?: FocusTimeWhereInput | FocusTimeWhereInput[]
    userId?: StringFilter<"FocusTime"> | string
    date?: DateTimeFilter<"FocusTime"> | Date | string
    minutes?: IntFilter<"FocusTime"> | number
    createdAt?: DateTimeFilter<"FocusTime"> | Date | string
    updatedAt?: DateTimeFilter<"FocusTime"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FocusTimeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    minutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FocusTimeCountOrderByAggregateInput
    _avg?: FocusTimeAvgOrderByAggregateInput
    _max?: FocusTimeMaxOrderByAggregateInput
    _min?: FocusTimeMinOrderByAggregateInput
    _sum?: FocusTimeSumOrderByAggregateInput
  }

  export type FocusTimeScalarWhereWithAggregatesInput = {
    AND?: FocusTimeScalarWhereWithAggregatesInput | FocusTimeScalarWhereWithAggregatesInput[]
    OR?: FocusTimeScalarWhereWithAggregatesInput[]
    NOT?: FocusTimeScalarWhereWithAggregatesInput | FocusTimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FocusTime"> | string
    userId?: StringWithAggregatesFilter<"FocusTime"> | string
    date?: DateTimeWithAggregatesFilter<"FocusTime"> | Date | string
    minutes?: IntWithAggregatesFilter<"FocusTime"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FocusTime"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FocusTime"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamCreateNestedManyWithoutUserInput
    standups?: StandupCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamUncheckedCreateNestedManyWithoutUserInput
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUpdateManyWithoutUserNestedInput
    standups?: StandupUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUncheckedUpdateManyWithoutUserNestedInput
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamUncheckedCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionUncheckedCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUncheckedUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUncheckedUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamCreateInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamsInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type UserTeamUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupCreateInput = {
    id?: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStandupsInput
    team: TeamCreateNestedOneWithoutStandupsInput
    tags?: TagCreateNestedManyWithoutStandupsInput
  }

  export type StandupUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutStandupsInput
  }

  export type StandupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStandupsNestedInput
    team?: TeamUpdateOneRequiredWithoutStandupsNestedInput
    tags?: TagUpdateManyWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutStandupsNestedInput
  }

  export type StandupCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    standups?: StandupCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    standups?: StandupUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairProgrammingSessionCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutPairSessionsInput
    participants?: PairSessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type PairProgrammingSessionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    teamId: string
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: PairSessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type PairProgrammingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPairSessionsNestedInput
    participants?: PairSessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type PairProgrammingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: PairSessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type PairProgrammingSessionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    teamId: string
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairProgrammingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairProgrammingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationCreateInput = {
    id?: string
    email: string
    status?: string
    role?: string
    invitedBy: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutTeamInvitationInput
  }

  export type TeamInvitationUncheckedCreateInput = {
    id?: string
    email: string
    teamId: string
    status?: string
    role?: string
    invitedBy: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutTeamInvitationNestedInput
  }

  export type TeamInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationCreateManyInput = {
    id?: string
    email: string
    teamId: string
    status?: string
    role?: string
    invitedBy: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session: PairProgrammingSessionCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutPairSessionsInput
  }

  export type PairSessionParticipantUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairSessionParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: PairProgrammingSessionUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutPairSessionsNestedInput
  }

  export type PairSessionParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairSessionParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPullRequestsInput
    team: TeamCreateNestedOneWithoutPullRequestsInput
  }

  export type PullRequestUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    userId: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
    team?: TeamUpdateOneRequiredWithoutPullRequestsNestedInput
  }

  export type PullRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    userId: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusTimeCreateInput = {
    id?: string
    date?: Date | string
    minutes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFocusTimesInput
  }

  export type FocusTimeUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    minutes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusTimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFocusTimesNestedInput
  }

  export type FocusTimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusTimeCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    minutes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusTimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusTimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan?: string
    status?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan?: string
    status?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan?: string
    status?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserTeamListRelationFilter = {
    every?: UserTeamWhereInput
    some?: UserTeamWhereInput
    none?: UserTeamWhereInput
  }

  export type StandupListRelationFilter = {
    every?: StandupWhereInput
    some?: StandupWhereInput
    none?: StandupWhereInput
  }

  export type PairSessionParticipantListRelationFilter = {
    every?: PairSessionParticipantWhereInput
    some?: PairSessionParticipantWhereInput
    none?: PairSessionParticipantWhereInput
  }

  export type PullRequestListRelationFilter = {
    every?: PullRequestWhereInput
    some?: PullRequestWhereInput
    none?: PullRequestWhereInput
  }

  export type FocusTimeListRelationFilter = {
    every?: FocusTimeWhereInput
    some?: FocusTimeWhereInput
    none?: FocusTimeWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StandupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PairSessionParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PullRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PairProgrammingSessionListRelationFilter = {
    every?: PairProgrammingSessionWhereInput
    some?: PairProgrammingSessionWhereInput
    none?: PairProgrammingSessionWhereInput
  }

  export type TeamInvitationListRelationFilter = {
    every?: TeamInvitationWhereInput
    some?: TeamInvitationWhereInput
    none?: TeamInvitationWhereInput
  }

  export type PairProgrammingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type UserTeamUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type UserTeamCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTeamMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StandupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PairProgrammingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    recordingUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PairProgrammingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    recordingUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PairProgrammingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    recordingUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TeamInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    role?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PairProgrammingSessionScalarRelationFilter = {
    is?: PairProgrammingSessionWhereInput
    isNot?: PairProgrammingSessionWhereInput
  }

  export type PairSessionParticipantSessionIdUserIdCompoundUniqueInput = {
    sessionId: string
    userId: string
  }

  export type PairSessionParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PairSessionParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PairSessionParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PullRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    number?: SortOrder
    url?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PullRequestAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type PullRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    number?: SortOrder
    url?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PullRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    number?: SortOrder
    url?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PullRequestSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FocusTimeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    minutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FocusTimeAvgOrderByAggregateInput = {
    minutes?: SortOrder
  }

  export type FocusTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    minutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FocusTimeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    minutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FocusTimeSumOrderByAggregateInput = {
    minutes?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTeamCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTeamCreateWithoutUserInput, UserTeamUncheckedCreateWithoutUserInput> | UserTeamCreateWithoutUserInput[] | UserTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutUserInput | UserTeamCreateOrConnectWithoutUserInput[]
    createMany?: UserTeamCreateManyUserInputEnvelope
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
  }

  export type StandupCreateNestedManyWithoutUserInput = {
    create?: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput> | StandupCreateWithoutUserInput[] | StandupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutUserInput | StandupCreateOrConnectWithoutUserInput[]
    createMany?: StandupCreateManyUserInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type PairSessionParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<PairSessionParticipantCreateWithoutUserInput, PairSessionParticipantUncheckedCreateWithoutUserInput> | PairSessionParticipantCreateWithoutUserInput[] | PairSessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutUserInput | PairSessionParticipantCreateOrConnectWithoutUserInput[]
    createMany?: PairSessionParticipantCreateManyUserInputEnvelope
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
  }

  export type PullRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<PullRequestCreateWithoutUserInput, PullRequestUncheckedCreateWithoutUserInput> | PullRequestCreateWithoutUserInput[] | PullRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutUserInput | PullRequestCreateOrConnectWithoutUserInput[]
    createMany?: PullRequestCreateManyUserInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type FocusTimeCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusTimeCreateWithoutUserInput, FocusTimeUncheckedCreateWithoutUserInput> | FocusTimeCreateWithoutUserInput[] | FocusTimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusTimeCreateOrConnectWithoutUserInput | FocusTimeCreateOrConnectWithoutUserInput[]
    createMany?: FocusTimeCreateManyUserInputEnvelope
    connect?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserTeamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTeamCreateWithoutUserInput, UserTeamUncheckedCreateWithoutUserInput> | UserTeamCreateWithoutUserInput[] | UserTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutUserInput | UserTeamCreateOrConnectWithoutUserInput[]
    createMany?: UserTeamCreateManyUserInputEnvelope
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
  }

  export type StandupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput> | StandupCreateWithoutUserInput[] | StandupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutUserInput | StandupCreateOrConnectWithoutUserInput[]
    createMany?: StandupCreateManyUserInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PairSessionParticipantCreateWithoutUserInput, PairSessionParticipantUncheckedCreateWithoutUserInput> | PairSessionParticipantCreateWithoutUserInput[] | PairSessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutUserInput | PairSessionParticipantCreateOrConnectWithoutUserInput[]
    createMany?: PairSessionParticipantCreateManyUserInputEnvelope
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PullRequestCreateWithoutUserInput, PullRequestUncheckedCreateWithoutUserInput> | PullRequestCreateWithoutUserInput[] | PullRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutUserInput | PullRequestCreateOrConnectWithoutUserInput[]
    createMany?: PullRequestCreateManyUserInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type FocusTimeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusTimeCreateWithoutUserInput, FocusTimeUncheckedCreateWithoutUserInput> | FocusTimeCreateWithoutUserInput[] | FocusTimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusTimeCreateOrConnectWithoutUserInput | FocusTimeCreateOrConnectWithoutUserInput[]
    createMany?: FocusTimeCreateManyUserInputEnvelope
    connect?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTeamUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTeamCreateWithoutUserInput, UserTeamUncheckedCreateWithoutUserInput> | UserTeamCreateWithoutUserInput[] | UserTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutUserInput | UserTeamCreateOrConnectWithoutUserInput[]
    upsert?: UserTeamUpsertWithWhereUniqueWithoutUserInput | UserTeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTeamCreateManyUserInputEnvelope
    set?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    disconnect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    delete?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    update?: UserTeamUpdateWithWhereUniqueWithoutUserInput | UserTeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTeamUpdateManyWithWhereWithoutUserInput | UserTeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTeamScalarWhereInput | UserTeamScalarWhereInput[]
  }

  export type StandupUpdateManyWithoutUserNestedInput = {
    create?: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput> | StandupCreateWithoutUserInput[] | StandupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutUserInput | StandupCreateOrConnectWithoutUserInput[]
    upsert?: StandupUpsertWithWhereUniqueWithoutUserInput | StandupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StandupCreateManyUserInputEnvelope
    set?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    disconnect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    delete?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    update?: StandupUpdateWithWhereUniqueWithoutUserInput | StandupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StandupUpdateManyWithWhereWithoutUserInput | StandupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StandupScalarWhereInput | StandupScalarWhereInput[]
  }

  export type PairSessionParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<PairSessionParticipantCreateWithoutUserInput, PairSessionParticipantUncheckedCreateWithoutUserInput> | PairSessionParticipantCreateWithoutUserInput[] | PairSessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutUserInput | PairSessionParticipantCreateOrConnectWithoutUserInput[]
    upsert?: PairSessionParticipantUpsertWithWhereUniqueWithoutUserInput | PairSessionParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PairSessionParticipantCreateManyUserInputEnvelope
    set?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    disconnect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    delete?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    update?: PairSessionParticipantUpdateWithWhereUniqueWithoutUserInput | PairSessionParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PairSessionParticipantUpdateManyWithWhereWithoutUserInput | PairSessionParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PairSessionParticipantScalarWhereInput | PairSessionParticipantScalarWhereInput[]
  }

  export type PullRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<PullRequestCreateWithoutUserInput, PullRequestUncheckedCreateWithoutUserInput> | PullRequestCreateWithoutUserInput[] | PullRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutUserInput | PullRequestCreateOrConnectWithoutUserInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutUserInput | PullRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PullRequestCreateManyUserInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutUserInput | PullRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutUserInput | PullRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type FocusTimeUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusTimeCreateWithoutUserInput, FocusTimeUncheckedCreateWithoutUserInput> | FocusTimeCreateWithoutUserInput[] | FocusTimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusTimeCreateOrConnectWithoutUserInput | FocusTimeCreateOrConnectWithoutUserInput[]
    upsert?: FocusTimeUpsertWithWhereUniqueWithoutUserInput | FocusTimeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusTimeCreateManyUserInputEnvelope
    set?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    disconnect?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    delete?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    connect?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    update?: FocusTimeUpdateWithWhereUniqueWithoutUserInput | FocusTimeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusTimeUpdateManyWithWhereWithoutUserInput | FocusTimeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusTimeScalarWhereInput | FocusTimeScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserTeamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTeamCreateWithoutUserInput, UserTeamUncheckedCreateWithoutUserInput> | UserTeamCreateWithoutUserInput[] | UserTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutUserInput | UserTeamCreateOrConnectWithoutUserInput[]
    upsert?: UserTeamUpsertWithWhereUniqueWithoutUserInput | UserTeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTeamCreateManyUserInputEnvelope
    set?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    disconnect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    delete?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    update?: UserTeamUpdateWithWhereUniqueWithoutUserInput | UserTeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTeamUpdateManyWithWhereWithoutUserInput | UserTeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTeamScalarWhereInput | UserTeamScalarWhereInput[]
  }

  export type StandupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput> | StandupCreateWithoutUserInput[] | StandupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutUserInput | StandupCreateOrConnectWithoutUserInput[]
    upsert?: StandupUpsertWithWhereUniqueWithoutUserInput | StandupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StandupCreateManyUserInputEnvelope
    set?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    disconnect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    delete?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    update?: StandupUpdateWithWhereUniqueWithoutUserInput | StandupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StandupUpdateManyWithWhereWithoutUserInput | StandupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StandupScalarWhereInput | StandupScalarWhereInput[]
  }

  export type PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PairSessionParticipantCreateWithoutUserInput, PairSessionParticipantUncheckedCreateWithoutUserInput> | PairSessionParticipantCreateWithoutUserInput[] | PairSessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutUserInput | PairSessionParticipantCreateOrConnectWithoutUserInput[]
    upsert?: PairSessionParticipantUpsertWithWhereUniqueWithoutUserInput | PairSessionParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PairSessionParticipantCreateManyUserInputEnvelope
    set?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    disconnect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    delete?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    update?: PairSessionParticipantUpdateWithWhereUniqueWithoutUserInput | PairSessionParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PairSessionParticipantUpdateManyWithWhereWithoutUserInput | PairSessionParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PairSessionParticipantScalarWhereInput | PairSessionParticipantScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PullRequestCreateWithoutUserInput, PullRequestUncheckedCreateWithoutUserInput> | PullRequestCreateWithoutUserInput[] | PullRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutUserInput | PullRequestCreateOrConnectWithoutUserInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutUserInput | PullRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PullRequestCreateManyUserInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutUserInput | PullRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutUserInput | PullRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type FocusTimeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusTimeCreateWithoutUserInput, FocusTimeUncheckedCreateWithoutUserInput> | FocusTimeCreateWithoutUserInput[] | FocusTimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusTimeCreateOrConnectWithoutUserInput | FocusTimeCreateOrConnectWithoutUserInput[]
    upsert?: FocusTimeUpsertWithWhereUniqueWithoutUserInput | FocusTimeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusTimeCreateManyUserInputEnvelope
    set?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    disconnect?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    delete?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    connect?: FocusTimeWhereUniqueInput | FocusTimeWhereUniqueInput[]
    update?: FocusTimeUpdateWithWhereUniqueWithoutUserInput | FocusTimeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusTimeUpdateManyWithWhereWithoutUserInput | FocusTimeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusTimeScalarWhereInput | FocusTimeScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserTeamCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserTeamCreateWithoutTeamInput, UserTeamUncheckedCreateWithoutTeamInput> | UserTeamCreateWithoutTeamInput[] | UserTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutTeamInput | UserTeamCreateOrConnectWithoutTeamInput[]
    createMany?: UserTeamCreateManyTeamInputEnvelope
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
  }

  export type PairProgrammingSessionCreateNestedManyWithoutTeamInput = {
    create?: XOR<PairProgrammingSessionCreateWithoutTeamInput, PairProgrammingSessionUncheckedCreateWithoutTeamInput> | PairProgrammingSessionCreateWithoutTeamInput[] | PairProgrammingSessionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PairProgrammingSessionCreateOrConnectWithoutTeamInput | PairProgrammingSessionCreateOrConnectWithoutTeamInput[]
    createMany?: PairProgrammingSessionCreateManyTeamInputEnvelope
    connect?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
  }

  export type PullRequestCreateNestedManyWithoutTeamInput = {
    create?: XOR<PullRequestCreateWithoutTeamInput, PullRequestUncheckedCreateWithoutTeamInput> | PullRequestCreateWithoutTeamInput[] | PullRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutTeamInput | PullRequestCreateOrConnectWithoutTeamInput[]
    createMany?: PullRequestCreateManyTeamInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type StandupCreateNestedManyWithoutTeamInput = {
    create?: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput> | StandupCreateWithoutTeamInput[] | StandupUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTeamInput | StandupCreateOrConnectWithoutTeamInput[]
    createMany?: StandupCreateManyTeamInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type TeamInvitationCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamInput, TeamInvitationUncheckedCreateWithoutTeamInput> | TeamInvitationCreateWithoutTeamInput[] | TeamInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamInput | TeamInvitationCreateOrConnectWithoutTeamInput[]
    createMany?: TeamInvitationCreateManyTeamInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type UserTeamUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserTeamCreateWithoutTeamInput, UserTeamUncheckedCreateWithoutTeamInput> | UserTeamCreateWithoutTeamInput[] | UserTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutTeamInput | UserTeamCreateOrConnectWithoutTeamInput[]
    createMany?: UserTeamCreateManyTeamInputEnvelope
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
  }

  export type PairProgrammingSessionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PairProgrammingSessionCreateWithoutTeamInput, PairProgrammingSessionUncheckedCreateWithoutTeamInput> | PairProgrammingSessionCreateWithoutTeamInput[] | PairProgrammingSessionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PairProgrammingSessionCreateOrConnectWithoutTeamInput | PairProgrammingSessionCreateOrConnectWithoutTeamInput[]
    createMany?: PairProgrammingSessionCreateManyTeamInputEnvelope
    connect?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PullRequestCreateWithoutTeamInput, PullRequestUncheckedCreateWithoutTeamInput> | PullRequestCreateWithoutTeamInput[] | PullRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutTeamInput | PullRequestCreateOrConnectWithoutTeamInput[]
    createMany?: PullRequestCreateManyTeamInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type StandupUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput> | StandupCreateWithoutTeamInput[] | StandupUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTeamInput | StandupCreateOrConnectWithoutTeamInput[]
    createMany?: StandupCreateManyTeamInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type TeamInvitationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamInput, TeamInvitationUncheckedCreateWithoutTeamInput> | TeamInvitationCreateWithoutTeamInput[] | TeamInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamInput | TeamInvitationCreateOrConnectWithoutTeamInput[]
    createMany?: TeamInvitationCreateManyTeamInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type UserTeamUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserTeamCreateWithoutTeamInput, UserTeamUncheckedCreateWithoutTeamInput> | UserTeamCreateWithoutTeamInput[] | UserTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutTeamInput | UserTeamCreateOrConnectWithoutTeamInput[]
    upsert?: UserTeamUpsertWithWhereUniqueWithoutTeamInput | UserTeamUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserTeamCreateManyTeamInputEnvelope
    set?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    disconnect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    delete?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    update?: UserTeamUpdateWithWhereUniqueWithoutTeamInput | UserTeamUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserTeamUpdateManyWithWhereWithoutTeamInput | UserTeamUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserTeamScalarWhereInput | UserTeamScalarWhereInput[]
  }

  export type PairProgrammingSessionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PairProgrammingSessionCreateWithoutTeamInput, PairProgrammingSessionUncheckedCreateWithoutTeamInput> | PairProgrammingSessionCreateWithoutTeamInput[] | PairProgrammingSessionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PairProgrammingSessionCreateOrConnectWithoutTeamInput | PairProgrammingSessionCreateOrConnectWithoutTeamInput[]
    upsert?: PairProgrammingSessionUpsertWithWhereUniqueWithoutTeamInput | PairProgrammingSessionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PairProgrammingSessionCreateManyTeamInputEnvelope
    set?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    disconnect?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    delete?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    connect?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    update?: PairProgrammingSessionUpdateWithWhereUniqueWithoutTeamInput | PairProgrammingSessionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PairProgrammingSessionUpdateManyWithWhereWithoutTeamInput | PairProgrammingSessionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PairProgrammingSessionScalarWhereInput | PairProgrammingSessionScalarWhereInput[]
  }

  export type PullRequestUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PullRequestCreateWithoutTeamInput, PullRequestUncheckedCreateWithoutTeamInput> | PullRequestCreateWithoutTeamInput[] | PullRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutTeamInput | PullRequestCreateOrConnectWithoutTeamInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutTeamInput | PullRequestUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PullRequestCreateManyTeamInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutTeamInput | PullRequestUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutTeamInput | PullRequestUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type StandupUpdateManyWithoutTeamNestedInput = {
    create?: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput> | StandupCreateWithoutTeamInput[] | StandupUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTeamInput | StandupCreateOrConnectWithoutTeamInput[]
    upsert?: StandupUpsertWithWhereUniqueWithoutTeamInput | StandupUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: StandupCreateManyTeamInputEnvelope
    set?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    disconnect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    delete?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    update?: StandupUpdateWithWhereUniqueWithoutTeamInput | StandupUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: StandupUpdateManyWithWhereWithoutTeamInput | StandupUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: StandupScalarWhereInput | StandupScalarWhereInput[]
  }

  export type TeamInvitationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamInput, TeamInvitationUncheckedCreateWithoutTeamInput> | TeamInvitationCreateWithoutTeamInput[] | TeamInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamInput | TeamInvitationCreateOrConnectWithoutTeamInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutTeamInput | TeamInvitationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamInvitationCreateManyTeamInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutTeamInput | TeamInvitationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutTeamInput | TeamInvitationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type UserTeamUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserTeamCreateWithoutTeamInput, UserTeamUncheckedCreateWithoutTeamInput> | UserTeamCreateWithoutTeamInput[] | UserTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserTeamCreateOrConnectWithoutTeamInput | UserTeamCreateOrConnectWithoutTeamInput[]
    upsert?: UserTeamUpsertWithWhereUniqueWithoutTeamInput | UserTeamUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserTeamCreateManyTeamInputEnvelope
    set?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    disconnect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    delete?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    connect?: UserTeamWhereUniqueInput | UserTeamWhereUniqueInput[]
    update?: UserTeamUpdateWithWhereUniqueWithoutTeamInput | UserTeamUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserTeamUpdateManyWithWhereWithoutTeamInput | UserTeamUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserTeamScalarWhereInput | UserTeamScalarWhereInput[]
  }

  export type PairProgrammingSessionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PairProgrammingSessionCreateWithoutTeamInput, PairProgrammingSessionUncheckedCreateWithoutTeamInput> | PairProgrammingSessionCreateWithoutTeamInput[] | PairProgrammingSessionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PairProgrammingSessionCreateOrConnectWithoutTeamInput | PairProgrammingSessionCreateOrConnectWithoutTeamInput[]
    upsert?: PairProgrammingSessionUpsertWithWhereUniqueWithoutTeamInput | PairProgrammingSessionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PairProgrammingSessionCreateManyTeamInputEnvelope
    set?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    disconnect?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    delete?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    connect?: PairProgrammingSessionWhereUniqueInput | PairProgrammingSessionWhereUniqueInput[]
    update?: PairProgrammingSessionUpdateWithWhereUniqueWithoutTeamInput | PairProgrammingSessionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PairProgrammingSessionUpdateManyWithWhereWithoutTeamInput | PairProgrammingSessionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PairProgrammingSessionScalarWhereInput | PairProgrammingSessionScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PullRequestCreateWithoutTeamInput, PullRequestUncheckedCreateWithoutTeamInput> | PullRequestCreateWithoutTeamInput[] | PullRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutTeamInput | PullRequestCreateOrConnectWithoutTeamInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutTeamInput | PullRequestUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PullRequestCreateManyTeamInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutTeamInput | PullRequestUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutTeamInput | PullRequestUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type StandupUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput> | StandupCreateWithoutTeamInput[] | StandupUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTeamInput | StandupCreateOrConnectWithoutTeamInput[]
    upsert?: StandupUpsertWithWhereUniqueWithoutTeamInput | StandupUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: StandupCreateManyTeamInputEnvelope
    set?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    disconnect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    delete?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    update?: StandupUpdateWithWhereUniqueWithoutTeamInput | StandupUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: StandupUpdateManyWithWhereWithoutTeamInput | StandupUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: StandupScalarWhereInput | StandupScalarWhereInput[]
  }

  export type TeamInvitationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamInput, TeamInvitationUncheckedCreateWithoutTeamInput> | TeamInvitationCreateWithoutTeamInput[] | TeamInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamInput | TeamInvitationCreateOrConnectWithoutTeamInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutTeamInput | TeamInvitationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamInvitationCreateManyTeamInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutTeamInput | TeamInvitationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutTeamInput | TeamInvitationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutStandupsInput = {
    create?: XOR<UserCreateWithoutStandupsInput, UserUncheckedCreateWithoutStandupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStandupsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutStandupsInput = {
    create?: XOR<TeamCreateWithoutStandupsInput, TeamUncheckedCreateWithoutStandupsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutStandupsInput
    connect?: TeamWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutStandupsInput = {
    create?: XOR<TagCreateWithoutStandupsInput, TagUncheckedCreateWithoutStandupsInput> | TagCreateWithoutStandupsInput[] | TagUncheckedCreateWithoutStandupsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutStandupsInput | TagCreateOrConnectWithoutStandupsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutStandupsInput = {
    create?: XOR<TagCreateWithoutStandupsInput, TagUncheckedCreateWithoutStandupsInput> | TagCreateWithoutStandupsInput[] | TagUncheckedCreateWithoutStandupsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutStandupsInput | TagCreateOrConnectWithoutStandupsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStandupsNestedInput = {
    create?: XOR<UserCreateWithoutStandupsInput, UserUncheckedCreateWithoutStandupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStandupsInput
    upsert?: UserUpsertWithoutStandupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStandupsInput, UserUpdateWithoutStandupsInput>, UserUncheckedUpdateWithoutStandupsInput>
  }

  export type TeamUpdateOneRequiredWithoutStandupsNestedInput = {
    create?: XOR<TeamCreateWithoutStandupsInput, TeamUncheckedCreateWithoutStandupsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutStandupsInput
    upsert?: TeamUpsertWithoutStandupsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutStandupsInput, TeamUpdateWithoutStandupsInput>, TeamUncheckedUpdateWithoutStandupsInput>
  }

  export type TagUpdateManyWithoutStandupsNestedInput = {
    create?: XOR<TagCreateWithoutStandupsInput, TagUncheckedCreateWithoutStandupsInput> | TagCreateWithoutStandupsInput[] | TagUncheckedCreateWithoutStandupsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutStandupsInput | TagCreateOrConnectWithoutStandupsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutStandupsInput | TagUpsertWithWhereUniqueWithoutStandupsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutStandupsInput | TagUpdateWithWhereUniqueWithoutStandupsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutStandupsInput | TagUpdateManyWithWhereWithoutStandupsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutStandupsNestedInput = {
    create?: XOR<TagCreateWithoutStandupsInput, TagUncheckedCreateWithoutStandupsInput> | TagCreateWithoutStandupsInput[] | TagUncheckedCreateWithoutStandupsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutStandupsInput | TagCreateOrConnectWithoutStandupsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutStandupsInput | TagUpsertWithWhereUniqueWithoutStandupsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutStandupsInput | TagUpdateWithWhereUniqueWithoutStandupsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutStandupsInput | TagUpdateManyWithWhereWithoutStandupsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type StandupCreateNestedManyWithoutTagsInput = {
    create?: XOR<StandupCreateWithoutTagsInput, StandupUncheckedCreateWithoutTagsInput> | StandupCreateWithoutTagsInput[] | StandupUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTagsInput | StandupCreateOrConnectWithoutTagsInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type StandupUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<StandupCreateWithoutTagsInput, StandupUncheckedCreateWithoutTagsInput> | StandupCreateWithoutTagsInput[] | StandupUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTagsInput | StandupCreateOrConnectWithoutTagsInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type StandupUpdateManyWithoutTagsNestedInput = {
    create?: XOR<StandupCreateWithoutTagsInput, StandupUncheckedCreateWithoutTagsInput> | StandupCreateWithoutTagsInput[] | StandupUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTagsInput | StandupCreateOrConnectWithoutTagsInput[]
    upsert?: StandupUpsertWithWhereUniqueWithoutTagsInput | StandupUpsertWithWhereUniqueWithoutTagsInput[]
    set?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    disconnect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    delete?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    update?: StandupUpdateWithWhereUniqueWithoutTagsInput | StandupUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: StandupUpdateManyWithWhereWithoutTagsInput | StandupUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: StandupScalarWhereInput | StandupScalarWhereInput[]
  }

  export type StandupUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<StandupCreateWithoutTagsInput, StandupUncheckedCreateWithoutTagsInput> | StandupCreateWithoutTagsInput[] | StandupUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTagsInput | StandupCreateOrConnectWithoutTagsInput[]
    upsert?: StandupUpsertWithWhereUniqueWithoutTagsInput | StandupUpsertWithWhereUniqueWithoutTagsInput[]
    set?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    disconnect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    delete?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
    update?: StandupUpdateWithWhereUniqueWithoutTagsInput | StandupUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: StandupUpdateManyWithWhereWithoutTagsInput | StandupUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: StandupScalarWhereInput | StandupScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPairSessionsInput = {
    create?: XOR<TeamCreateWithoutPairSessionsInput, TeamUncheckedCreateWithoutPairSessionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPairSessionsInput
    connect?: TeamWhereUniqueInput
  }

  export type PairSessionParticipantCreateNestedManyWithoutSessionInput = {
    create?: XOR<PairSessionParticipantCreateWithoutSessionInput, PairSessionParticipantUncheckedCreateWithoutSessionInput> | PairSessionParticipantCreateWithoutSessionInput[] | PairSessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutSessionInput | PairSessionParticipantCreateOrConnectWithoutSessionInput[]
    createMany?: PairSessionParticipantCreateManySessionInputEnvelope
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
  }

  export type PairSessionParticipantUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<PairSessionParticipantCreateWithoutSessionInput, PairSessionParticipantUncheckedCreateWithoutSessionInput> | PairSessionParticipantCreateWithoutSessionInput[] | PairSessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutSessionInput | PairSessionParticipantCreateOrConnectWithoutSessionInput[]
    createMany?: PairSessionParticipantCreateManySessionInputEnvelope
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeamUpdateOneRequiredWithoutPairSessionsNestedInput = {
    create?: XOR<TeamCreateWithoutPairSessionsInput, TeamUncheckedCreateWithoutPairSessionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPairSessionsInput
    upsert?: TeamUpsertWithoutPairSessionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPairSessionsInput, TeamUpdateWithoutPairSessionsInput>, TeamUncheckedUpdateWithoutPairSessionsInput>
  }

  export type PairSessionParticipantUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PairSessionParticipantCreateWithoutSessionInput, PairSessionParticipantUncheckedCreateWithoutSessionInput> | PairSessionParticipantCreateWithoutSessionInput[] | PairSessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutSessionInput | PairSessionParticipantCreateOrConnectWithoutSessionInput[]
    upsert?: PairSessionParticipantUpsertWithWhereUniqueWithoutSessionInput | PairSessionParticipantUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PairSessionParticipantCreateManySessionInputEnvelope
    set?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    disconnect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    delete?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    update?: PairSessionParticipantUpdateWithWhereUniqueWithoutSessionInput | PairSessionParticipantUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PairSessionParticipantUpdateManyWithWhereWithoutSessionInput | PairSessionParticipantUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PairSessionParticipantScalarWhereInput | PairSessionParticipantScalarWhereInput[]
  }

  export type PairSessionParticipantUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PairSessionParticipantCreateWithoutSessionInput, PairSessionParticipantUncheckedCreateWithoutSessionInput> | PairSessionParticipantCreateWithoutSessionInput[] | PairSessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PairSessionParticipantCreateOrConnectWithoutSessionInput | PairSessionParticipantCreateOrConnectWithoutSessionInput[]
    upsert?: PairSessionParticipantUpsertWithWhereUniqueWithoutSessionInput | PairSessionParticipantUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PairSessionParticipantCreateManySessionInputEnvelope
    set?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    disconnect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    delete?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    connect?: PairSessionParticipantWhereUniqueInput | PairSessionParticipantWhereUniqueInput[]
    update?: PairSessionParticipantUpdateWithWhereUniqueWithoutSessionInput | PairSessionParticipantUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PairSessionParticipantUpdateManyWithWhereWithoutSessionInput | PairSessionParticipantUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PairSessionParticipantScalarWhereInput | PairSessionParticipantScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutTeamInvitationInput = {
    create?: XOR<TeamCreateWithoutTeamInvitationInput, TeamUncheckedCreateWithoutTeamInvitationInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamInvitationInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutTeamInvitationNestedInput = {
    create?: XOR<TeamCreateWithoutTeamInvitationInput, TeamUncheckedCreateWithoutTeamInvitationInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamInvitationInput
    upsert?: TeamUpsertWithoutTeamInvitationInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamInvitationInput, TeamUpdateWithoutTeamInvitationInput>, TeamUncheckedUpdateWithoutTeamInvitationInput>
  }

  export type PairProgrammingSessionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<PairProgrammingSessionCreateWithoutParticipantsInput, PairProgrammingSessionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: PairProgrammingSessionCreateOrConnectWithoutParticipantsInput
    connect?: PairProgrammingSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPairSessionsInput = {
    create?: XOR<UserCreateWithoutPairSessionsInput, UserUncheckedCreateWithoutPairSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPairSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type PairProgrammingSessionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<PairProgrammingSessionCreateWithoutParticipantsInput, PairProgrammingSessionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: PairProgrammingSessionCreateOrConnectWithoutParticipantsInput
    upsert?: PairProgrammingSessionUpsertWithoutParticipantsInput
    connect?: PairProgrammingSessionWhereUniqueInput
    update?: XOR<XOR<PairProgrammingSessionUpdateToOneWithWhereWithoutParticipantsInput, PairProgrammingSessionUpdateWithoutParticipantsInput>, PairProgrammingSessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutPairSessionsNestedInput = {
    create?: XOR<UserCreateWithoutPairSessionsInput, UserUncheckedCreateWithoutPairSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPairSessionsInput
    upsert?: UserUpsertWithoutPairSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPairSessionsInput, UserUpdateWithoutPairSessionsInput>, UserUncheckedUpdateWithoutPairSessionsInput>
  }

  export type UserCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPullRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<TeamCreateWithoutPullRequestsInput, TeamUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPullRequestsInput
    connect?: TeamWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPullRequestsInput
    upsert?: UserUpsertWithoutPullRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPullRequestsInput, UserUpdateWithoutPullRequestsInput>, UserUncheckedUpdateWithoutPullRequestsInput>
  }

  export type TeamUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<TeamCreateWithoutPullRequestsInput, TeamUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPullRequestsInput
    upsert?: TeamUpsertWithoutPullRequestsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPullRequestsInput, TeamUpdateWithoutPullRequestsInput>, TeamUncheckedUpdateWithoutPullRequestsInput>
  }

  export type UserCreateNestedOneWithoutFocusTimesInput = {
    create?: XOR<UserCreateWithoutFocusTimesInput, UserUncheckedCreateWithoutFocusTimesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocusTimesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFocusTimesNestedInput = {
    create?: XOR<UserCreateWithoutFocusTimesInput, UserUncheckedCreateWithoutFocusTimesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocusTimesInput
    upsert?: UserUpsertWithoutFocusTimesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFocusTimesInput, UserUpdateWithoutFocusTimesInput>, UserUncheckedUpdateWithoutFocusTimesInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserTeamCreateWithoutUserInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type UserTeamUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTeamCreateOrConnectWithoutUserInput = {
    where: UserTeamWhereUniqueInput
    create: XOR<UserTeamCreateWithoutUserInput, UserTeamUncheckedCreateWithoutUserInput>
  }

  export type UserTeamCreateManyUserInputEnvelope = {
    data: UserTeamCreateManyUserInput | UserTeamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StandupCreateWithoutUserInput = {
    id?: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutStandupsInput
    tags?: TagCreateNestedManyWithoutStandupsInput
  }

  export type StandupUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutStandupsInput
  }

  export type StandupCreateOrConnectWithoutUserInput = {
    where: StandupWhereUniqueInput
    create: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput>
  }

  export type StandupCreateManyUserInputEnvelope = {
    data: StandupCreateManyUserInput | StandupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PairSessionParticipantCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session: PairProgrammingSessionCreateNestedOneWithoutParticipantsInput
  }

  export type PairSessionParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairSessionParticipantCreateOrConnectWithoutUserInput = {
    where: PairSessionParticipantWhereUniqueInput
    create: XOR<PairSessionParticipantCreateWithoutUserInput, PairSessionParticipantUncheckedCreateWithoutUserInput>
  }

  export type PairSessionParticipantCreateManyUserInputEnvelope = {
    data: PairSessionParticipantCreateManyUserInput | PairSessionParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutPullRequestsInput
  }

  export type PullRequestUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestCreateOrConnectWithoutUserInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutUserInput, PullRequestUncheckedCreateWithoutUserInput>
  }

  export type PullRequestCreateManyUserInputEnvelope = {
    data: PullRequestCreateManyUserInput | PullRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FocusTimeCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    minutes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusTimeUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    minutes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusTimeCreateOrConnectWithoutUserInput = {
    where: FocusTimeWhereUniqueInput
    create: XOR<FocusTimeCreateWithoutUserInput, FocusTimeUncheckedCreateWithoutUserInput>
  }

  export type FocusTimeCreateManyUserInputEnvelope = {
    data: FocusTimeCreateManyUserInput | FocusTimeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan?: string
    status?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan?: string
    status?: string
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserTeamUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTeamWhereUniqueInput
    update: XOR<UserTeamUpdateWithoutUserInput, UserTeamUncheckedUpdateWithoutUserInput>
    create: XOR<UserTeamCreateWithoutUserInput, UserTeamUncheckedCreateWithoutUserInput>
  }

  export type UserTeamUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTeamWhereUniqueInput
    data: XOR<UserTeamUpdateWithoutUserInput, UserTeamUncheckedUpdateWithoutUserInput>
  }

  export type UserTeamUpdateManyWithWhereWithoutUserInput = {
    where: UserTeamScalarWhereInput
    data: XOR<UserTeamUpdateManyMutationInput, UserTeamUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTeamScalarWhereInput = {
    AND?: UserTeamScalarWhereInput | UserTeamScalarWhereInput[]
    OR?: UserTeamScalarWhereInput[]
    NOT?: UserTeamScalarWhereInput | UserTeamScalarWhereInput[]
    id?: StringFilter<"UserTeam"> | string
    userId?: StringFilter<"UserTeam"> | string
    teamId?: StringFilter<"UserTeam"> | string
    role?: StringFilter<"UserTeam"> | string
    createdAt?: DateTimeFilter<"UserTeam"> | Date | string
    updatedAt?: DateTimeFilter<"UserTeam"> | Date | string
  }

  export type StandupUpsertWithWhereUniqueWithoutUserInput = {
    where: StandupWhereUniqueInput
    update: XOR<StandupUpdateWithoutUserInput, StandupUncheckedUpdateWithoutUserInput>
    create: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput>
  }

  export type StandupUpdateWithWhereUniqueWithoutUserInput = {
    where: StandupWhereUniqueInput
    data: XOR<StandupUpdateWithoutUserInput, StandupUncheckedUpdateWithoutUserInput>
  }

  export type StandupUpdateManyWithWhereWithoutUserInput = {
    where: StandupScalarWhereInput
    data: XOR<StandupUpdateManyMutationInput, StandupUncheckedUpdateManyWithoutUserInput>
  }

  export type StandupScalarWhereInput = {
    AND?: StandupScalarWhereInput | StandupScalarWhereInput[]
    OR?: StandupScalarWhereInput[]
    NOT?: StandupScalarWhereInput | StandupScalarWhereInput[]
    id?: StringFilter<"Standup"> | string
    userId?: StringFilter<"Standup"> | string
    teamId?: StringFilter<"Standup"> | string
    yesterday?: StringNullableFilter<"Standup"> | string | null
    today?: StringNullableFilter<"Standup"> | string | null
    blockers?: StringNullableFilter<"Standup"> | string | null
    audioUrl?: StringNullableFilter<"Standup"> | string | null
    createdAt?: DateTimeFilter<"Standup"> | Date | string
    updatedAt?: DateTimeFilter<"Standup"> | Date | string
  }

  export type PairSessionParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: PairSessionParticipantWhereUniqueInput
    update: XOR<PairSessionParticipantUpdateWithoutUserInput, PairSessionParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<PairSessionParticipantCreateWithoutUserInput, PairSessionParticipantUncheckedCreateWithoutUserInput>
  }

  export type PairSessionParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: PairSessionParticipantWhereUniqueInput
    data: XOR<PairSessionParticipantUpdateWithoutUserInput, PairSessionParticipantUncheckedUpdateWithoutUserInput>
  }

  export type PairSessionParticipantUpdateManyWithWhereWithoutUserInput = {
    where: PairSessionParticipantScalarWhereInput
    data: XOR<PairSessionParticipantUpdateManyMutationInput, PairSessionParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type PairSessionParticipantScalarWhereInput = {
    AND?: PairSessionParticipantScalarWhereInput | PairSessionParticipantScalarWhereInput[]
    OR?: PairSessionParticipantScalarWhereInput[]
    NOT?: PairSessionParticipantScalarWhereInput | PairSessionParticipantScalarWhereInput[]
    id?: StringFilter<"PairSessionParticipant"> | string
    sessionId?: StringFilter<"PairSessionParticipant"> | string
    userId?: StringFilter<"PairSessionParticipant"> | string
    createdAt?: DateTimeFilter<"PairSessionParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"PairSessionParticipant"> | Date | string
  }

  export type PullRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutUserInput, PullRequestUncheckedUpdateWithoutUserInput>
    create: XOR<PullRequestCreateWithoutUserInput, PullRequestUncheckedCreateWithoutUserInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutUserInput, PullRequestUncheckedUpdateWithoutUserInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutUserInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type PullRequestScalarWhereInput = {
    AND?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    OR?: PullRequestScalarWhereInput[]
    NOT?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    title?: StringFilter<"PullRequest"> | string
    description?: StringNullableFilter<"PullRequest"> | string | null
    number?: IntFilter<"PullRequest"> | number
    url?: StringFilter<"PullRequest"> | string
    status?: StringFilter<"PullRequest"> | string
    userId?: StringFilter<"PullRequest"> | string
    teamId?: StringFilter<"PullRequest"> | string
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
  }

  export type FocusTimeUpsertWithWhereUniqueWithoutUserInput = {
    where: FocusTimeWhereUniqueInput
    update: XOR<FocusTimeUpdateWithoutUserInput, FocusTimeUncheckedUpdateWithoutUserInput>
    create: XOR<FocusTimeCreateWithoutUserInput, FocusTimeUncheckedCreateWithoutUserInput>
  }

  export type FocusTimeUpdateWithWhereUniqueWithoutUserInput = {
    where: FocusTimeWhereUniqueInput
    data: XOR<FocusTimeUpdateWithoutUserInput, FocusTimeUncheckedUpdateWithoutUserInput>
  }

  export type FocusTimeUpdateManyWithWhereWithoutUserInput = {
    where: FocusTimeScalarWhereInput
    data: XOR<FocusTimeUpdateManyMutationInput, FocusTimeUncheckedUpdateManyWithoutUserInput>
  }

  export type FocusTimeScalarWhereInput = {
    AND?: FocusTimeScalarWhereInput | FocusTimeScalarWhereInput[]
    OR?: FocusTimeScalarWhereInput[]
    NOT?: FocusTimeScalarWhereInput | FocusTimeScalarWhereInput[]
    id?: StringFilter<"FocusTime"> | string
    userId?: StringFilter<"FocusTime"> | string
    date?: DateTimeFilter<"FocusTime"> | Date | string
    minutes?: IntFilter<"FocusTime"> | number
    createdAt?: DateTimeFilter<"FocusTime"> | Date | string
    updatedAt?: DateTimeFilter<"FocusTime"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamCreateWithoutTeamInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type UserTeamUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTeamCreateOrConnectWithoutTeamInput = {
    where: UserTeamWhereUniqueInput
    create: XOR<UserTeamCreateWithoutTeamInput, UserTeamUncheckedCreateWithoutTeamInput>
  }

  export type UserTeamCreateManyTeamInputEnvelope = {
    data: UserTeamCreateManyTeamInput | UserTeamCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PairProgrammingSessionCreateWithoutTeamInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: PairSessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type PairProgrammingSessionUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: PairSessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type PairProgrammingSessionCreateOrConnectWithoutTeamInput = {
    where: PairProgrammingSessionWhereUniqueInput
    create: XOR<PairProgrammingSessionCreateWithoutTeamInput, PairProgrammingSessionUncheckedCreateWithoutTeamInput>
  }

  export type PairProgrammingSessionCreateManyTeamInputEnvelope = {
    data: PairProgrammingSessionCreateManyTeamInput | PairProgrammingSessionCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestCreateWithoutTeamInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPullRequestsInput
  }

  export type PullRequestUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestCreateOrConnectWithoutTeamInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutTeamInput, PullRequestUncheckedCreateWithoutTeamInput>
  }

  export type PullRequestCreateManyTeamInputEnvelope = {
    data: PullRequestCreateManyTeamInput | PullRequestCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type StandupCreateWithoutTeamInput = {
    id?: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStandupsInput
    tags?: TagCreateNestedManyWithoutStandupsInput
  }

  export type StandupUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutStandupsInput
  }

  export type StandupCreateOrConnectWithoutTeamInput = {
    where: StandupWhereUniqueInput
    create: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput>
  }

  export type StandupCreateManyTeamInputEnvelope = {
    data: StandupCreateManyTeamInput | StandupCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamInvitationCreateWithoutTeamInput = {
    id?: string
    email: string
    status?: string
    role?: string
    invitedBy: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationUncheckedCreateWithoutTeamInput = {
    id?: string
    email: string
    status?: string
    role?: string
    invitedBy: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationCreateOrConnectWithoutTeamInput = {
    where: TeamInvitationWhereUniqueInput
    create: XOR<TeamInvitationCreateWithoutTeamInput, TeamInvitationUncheckedCreateWithoutTeamInput>
  }

  export type TeamInvitationCreateManyTeamInputEnvelope = {
    data: TeamInvitationCreateManyTeamInput | TeamInvitationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserTeamUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserTeamWhereUniqueInput
    update: XOR<UserTeamUpdateWithoutTeamInput, UserTeamUncheckedUpdateWithoutTeamInput>
    create: XOR<UserTeamCreateWithoutTeamInput, UserTeamUncheckedCreateWithoutTeamInput>
  }

  export type UserTeamUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserTeamWhereUniqueInput
    data: XOR<UserTeamUpdateWithoutTeamInput, UserTeamUncheckedUpdateWithoutTeamInput>
  }

  export type UserTeamUpdateManyWithWhereWithoutTeamInput = {
    where: UserTeamScalarWhereInput
    data: XOR<UserTeamUpdateManyMutationInput, UserTeamUncheckedUpdateManyWithoutTeamInput>
  }

  export type PairProgrammingSessionUpsertWithWhereUniqueWithoutTeamInput = {
    where: PairProgrammingSessionWhereUniqueInput
    update: XOR<PairProgrammingSessionUpdateWithoutTeamInput, PairProgrammingSessionUncheckedUpdateWithoutTeamInput>
    create: XOR<PairProgrammingSessionCreateWithoutTeamInput, PairProgrammingSessionUncheckedCreateWithoutTeamInput>
  }

  export type PairProgrammingSessionUpdateWithWhereUniqueWithoutTeamInput = {
    where: PairProgrammingSessionWhereUniqueInput
    data: XOR<PairProgrammingSessionUpdateWithoutTeamInput, PairProgrammingSessionUncheckedUpdateWithoutTeamInput>
  }

  export type PairProgrammingSessionUpdateManyWithWhereWithoutTeamInput = {
    where: PairProgrammingSessionScalarWhereInput
    data: XOR<PairProgrammingSessionUpdateManyMutationInput, PairProgrammingSessionUncheckedUpdateManyWithoutTeamInput>
  }

  export type PairProgrammingSessionScalarWhereInput = {
    AND?: PairProgrammingSessionScalarWhereInput | PairProgrammingSessionScalarWhereInput[]
    OR?: PairProgrammingSessionScalarWhereInput[]
    NOT?: PairProgrammingSessionScalarWhereInput | PairProgrammingSessionScalarWhereInput[]
    id?: StringFilter<"PairProgrammingSession"> | string
    title?: StringFilter<"PairProgrammingSession"> | string
    description?: StringNullableFilter<"PairProgrammingSession"> | string | null
    teamId?: StringFilter<"PairProgrammingSession"> | string
    status?: StringFilter<"PairProgrammingSession"> | string
    startTime?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    endTime?: DateTimeNullableFilter<"PairProgrammingSession"> | Date | string | null
    recordingUrl?: StringNullableFilter<"PairProgrammingSession"> | string | null
    createdAt?: DateTimeFilter<"PairProgrammingSession"> | Date | string
    updatedAt?: DateTimeFilter<"PairProgrammingSession"> | Date | string
  }

  export type PullRequestUpsertWithWhereUniqueWithoutTeamInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutTeamInput, PullRequestUncheckedUpdateWithoutTeamInput>
    create: XOR<PullRequestCreateWithoutTeamInput, PullRequestUncheckedCreateWithoutTeamInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutTeamInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutTeamInput, PullRequestUncheckedUpdateWithoutTeamInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutTeamInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutTeamInput>
  }

  export type StandupUpsertWithWhereUniqueWithoutTeamInput = {
    where: StandupWhereUniqueInput
    update: XOR<StandupUpdateWithoutTeamInput, StandupUncheckedUpdateWithoutTeamInput>
    create: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput>
  }

  export type StandupUpdateWithWhereUniqueWithoutTeamInput = {
    where: StandupWhereUniqueInput
    data: XOR<StandupUpdateWithoutTeamInput, StandupUncheckedUpdateWithoutTeamInput>
  }

  export type StandupUpdateManyWithWhereWithoutTeamInput = {
    where: StandupScalarWhereInput
    data: XOR<StandupUpdateManyMutationInput, StandupUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamInvitationUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamInvitationWhereUniqueInput
    update: XOR<TeamInvitationUpdateWithoutTeamInput, TeamInvitationUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamInvitationCreateWithoutTeamInput, TeamInvitationUncheckedCreateWithoutTeamInput>
  }

  export type TeamInvitationUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamInvitationWhereUniqueInput
    data: XOR<TeamInvitationUpdateWithoutTeamInput, TeamInvitationUncheckedUpdateWithoutTeamInput>
  }

  export type TeamInvitationUpdateManyWithWhereWithoutTeamInput = {
    where: TeamInvitationScalarWhereInput
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamInvitationScalarWhereInput = {
    AND?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
    OR?: TeamInvitationScalarWhereInput[]
    NOT?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
    id?: StringFilter<"TeamInvitation"> | string
    email?: StringFilter<"TeamInvitation"> | string
    teamId?: StringFilter<"TeamInvitation"> | string
    status?: StringFilter<"TeamInvitation"> | string
    role?: StringFilter<"TeamInvitation"> | string
    invitedBy?: StringFilter<"TeamInvitation"> | string
    expiresAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    createdAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TeamInvitation"> | Date | string
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    standups?: StandupCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pairSessions?: PairProgrammingSessionCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pairSessions?: PairProgrammingSessionUncheckedCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairSessions?: PairProgrammingSessionUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairSessions?: PairProgrammingSessionUncheckedUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutStandupsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStandupsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamUncheckedCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStandupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStandupsInput, UserUncheckedCreateWithoutStandupsInput>
  }

  export type TeamCreateWithoutStandupsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutStandupsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamUncheckedCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionUncheckedCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutStandupsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutStandupsInput, TeamUncheckedCreateWithoutStandupsInput>
  }

  export type TagCreateWithoutStandupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutStandupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutStandupsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutStandupsInput, TagUncheckedCreateWithoutStandupsInput>
  }

  export type UserUpsertWithoutStandupsInput = {
    update: XOR<UserUpdateWithoutStandupsInput, UserUncheckedUpdateWithoutStandupsInput>
    create: XOR<UserCreateWithoutStandupsInput, UserUncheckedCreateWithoutStandupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStandupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStandupsInput, UserUncheckedUpdateWithoutStandupsInput>
  }

  export type UserUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUncheckedUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamUpsertWithoutStandupsInput = {
    update: XOR<TeamUpdateWithoutStandupsInput, TeamUncheckedUpdateWithoutStandupsInput>
    create: XOR<TeamCreateWithoutStandupsInput, TeamUncheckedCreateWithoutStandupsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutStandupsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutStandupsInput, TeamUncheckedUpdateWithoutStandupsInput>
  }

  export type TeamUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUncheckedUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUncheckedUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutStandupsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutStandupsInput, TagUncheckedUpdateWithoutStandupsInput>
    create: XOR<TagCreateWithoutStandupsInput, TagUncheckedCreateWithoutStandupsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutStandupsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutStandupsInput, TagUncheckedUpdateWithoutStandupsInput>
  }

  export type TagUpdateManyWithWhereWithoutStandupsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutStandupsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type StandupCreateWithoutTagsInput = {
    id?: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStandupsInput
    team: TeamCreateNestedOneWithoutStandupsInput
  }

  export type StandupUncheckedCreateWithoutTagsInput = {
    id?: string
    userId: string
    teamId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupCreateOrConnectWithoutTagsInput = {
    where: StandupWhereUniqueInput
    create: XOR<StandupCreateWithoutTagsInput, StandupUncheckedCreateWithoutTagsInput>
  }

  export type StandupUpsertWithWhereUniqueWithoutTagsInput = {
    where: StandupWhereUniqueInput
    update: XOR<StandupUpdateWithoutTagsInput, StandupUncheckedUpdateWithoutTagsInput>
    create: XOR<StandupCreateWithoutTagsInput, StandupUncheckedCreateWithoutTagsInput>
  }

  export type StandupUpdateWithWhereUniqueWithoutTagsInput = {
    where: StandupWhereUniqueInput
    data: XOR<StandupUpdateWithoutTagsInput, StandupUncheckedUpdateWithoutTagsInput>
  }

  export type StandupUpdateManyWithWhereWithoutTagsInput = {
    where: StandupScalarWhereInput
    data: XOR<StandupUpdateManyMutationInput, StandupUncheckedUpdateManyWithoutTagsInput>
  }

  export type TeamCreateWithoutPairSessionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPairSessionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamUncheckedCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPairSessionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPairSessionsInput, TeamUncheckedCreateWithoutPairSessionsInput>
  }

  export type PairSessionParticipantCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPairSessionsInput
  }

  export type PairSessionParticipantUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairSessionParticipantCreateOrConnectWithoutSessionInput = {
    where: PairSessionParticipantWhereUniqueInput
    create: XOR<PairSessionParticipantCreateWithoutSessionInput, PairSessionParticipantUncheckedCreateWithoutSessionInput>
  }

  export type PairSessionParticipantCreateManySessionInputEnvelope = {
    data: PairSessionParticipantCreateManySessionInput | PairSessionParticipantCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutPairSessionsInput = {
    update: XOR<TeamUpdateWithoutPairSessionsInput, TeamUncheckedUpdateWithoutPairSessionsInput>
    create: XOR<TeamCreateWithoutPairSessionsInput, TeamUncheckedCreateWithoutPairSessionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPairSessionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPairSessionsInput, TeamUncheckedUpdateWithoutPairSessionsInput>
  }

  export type TeamUpdateWithoutPairSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPairSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUncheckedUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PairSessionParticipantUpsertWithWhereUniqueWithoutSessionInput = {
    where: PairSessionParticipantWhereUniqueInput
    update: XOR<PairSessionParticipantUpdateWithoutSessionInput, PairSessionParticipantUncheckedUpdateWithoutSessionInput>
    create: XOR<PairSessionParticipantCreateWithoutSessionInput, PairSessionParticipantUncheckedCreateWithoutSessionInput>
  }

  export type PairSessionParticipantUpdateWithWhereUniqueWithoutSessionInput = {
    where: PairSessionParticipantWhereUniqueInput
    data: XOR<PairSessionParticipantUpdateWithoutSessionInput, PairSessionParticipantUncheckedUpdateWithoutSessionInput>
  }

  export type PairSessionParticipantUpdateManyWithWhereWithoutSessionInput = {
    where: PairSessionParticipantScalarWhereInput
    data: XOR<PairSessionParticipantUpdateManyMutationInput, PairSessionParticipantUncheckedUpdateManyWithoutSessionInput>
  }

  export type TeamCreateWithoutTeamInvitationInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamInvitationInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamUncheckedCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionUncheckedCreateNestedManyWithoutTeamInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamInvitationInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamInvitationInput, TeamUncheckedCreateWithoutTeamInvitationInput>
  }

  export type TeamUpsertWithoutTeamInvitationInput = {
    update: XOR<TeamUpdateWithoutTeamInvitationInput, TeamUncheckedUpdateWithoutTeamInvitationInput>
    create: XOR<TeamCreateWithoutTeamInvitationInput, TeamUncheckedCreateWithoutTeamInvitationInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamInvitationInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamInvitationInput, TeamUncheckedUpdateWithoutTeamInvitationInput>
  }

  export type TeamUpdateWithoutTeamInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUncheckedUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUncheckedUpdateManyWithoutTeamNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PairProgrammingSessionCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutPairSessionsInput
  }

  export type PairProgrammingSessionUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    teamId: string
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairProgrammingSessionCreateOrConnectWithoutParticipantsInput = {
    where: PairProgrammingSessionWhereUniqueInput
    create: XOR<PairProgrammingSessionCreateWithoutParticipantsInput, PairProgrammingSessionUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutPairSessionsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamCreateNestedManyWithoutUserInput
    standups?: StandupCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPairSessionsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamUncheckedCreateNestedManyWithoutUserInput
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPairSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPairSessionsInput, UserUncheckedCreateWithoutPairSessionsInput>
  }

  export type PairProgrammingSessionUpsertWithoutParticipantsInput = {
    update: XOR<PairProgrammingSessionUpdateWithoutParticipantsInput, PairProgrammingSessionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<PairProgrammingSessionCreateWithoutParticipantsInput, PairProgrammingSessionUncheckedCreateWithoutParticipantsInput>
    where?: PairProgrammingSessionWhereInput
  }

  export type PairProgrammingSessionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: PairProgrammingSessionWhereInput
    data: XOR<PairProgrammingSessionUpdateWithoutParticipantsInput, PairProgrammingSessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type PairProgrammingSessionUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPairSessionsNestedInput
  }

  export type PairProgrammingSessionUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPairSessionsInput = {
    update: XOR<UserUpdateWithoutPairSessionsInput, UserUncheckedUpdateWithoutPairSessionsInput>
    create: XOR<UserCreateWithoutPairSessionsInput, UserUncheckedCreateWithoutPairSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPairSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPairSessionsInput, UserUncheckedUpdateWithoutPairSessionsInput>
  }

  export type UserUpdateWithoutPairSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUpdateManyWithoutUserNestedInput
    standups?: StandupUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPairSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUncheckedUpdateManyWithoutUserNestedInput
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPullRequestsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamCreateNestedManyWithoutUserInput
    standups?: StandupCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamUncheckedCreateNestedManyWithoutUserInput
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPullRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
  }

  export type TeamCreateWithoutPullRequestsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserTeamUncheckedCreateNestedManyWithoutTeamInput
    pairSessions?: PairProgrammingSessionUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
    TeamInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPullRequestsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPullRequestsInput, TeamUncheckedCreateWithoutPullRequestsInput>
  }

  export type UserUpsertWithoutPullRequestsInput = {
    update: XOR<UserUpdateWithoutPullRequestsInput, UserUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPullRequestsInput, UserUncheckedUpdateWithoutPullRequestsInput>
  }

  export type UserUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUpdateManyWithoutUserNestedInput
    standups?: StandupUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUncheckedUpdateManyWithoutUserNestedInput
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamUpsertWithoutPullRequestsInput = {
    update: XOR<TeamUpdateWithoutPullRequestsInput, TeamUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<TeamCreateWithoutPullRequestsInput, TeamUncheckedCreateWithoutPullRequestsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPullRequestsInput, TeamUncheckedUpdateWithoutPullRequestsInput>
  }

  export type TeamUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserTeamUncheckedUpdateManyWithoutTeamNestedInput
    pairSessions?: PairProgrammingSessionUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
    TeamInvitation?: TeamInvitationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutFocusTimesInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamCreateNestedManyWithoutUserInput
    standups?: StandupCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFocusTimesInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamUncheckedCreateNestedManyWithoutUserInput
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFocusTimesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFocusTimesInput, UserUncheckedCreateWithoutFocusTimesInput>
  }

  export type UserUpsertWithoutFocusTimesInput = {
    update: XOR<UserUpdateWithoutFocusTimesInput, UserUncheckedUpdateWithoutFocusTimesInput>
    create: XOR<UserCreateWithoutFocusTimesInput, UserUncheckedCreateWithoutFocusTimesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFocusTimesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFocusTimesInput, UserUncheckedUpdateWithoutFocusTimesInput>
  }

  export type UserUpdateWithoutFocusTimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUpdateManyWithoutUserNestedInput
    standups?: StandupUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFocusTimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUncheckedUpdateManyWithoutUserNestedInput
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamCreateNestedManyWithoutUserInput
    standups?: StandupCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    avatarUrl?: string | null
    provider?: string
    status?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: UserTeamUncheckedCreateNestedManyWithoutUserInput
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    pairSessions?: PairSessionParticipantUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutUserInput
    focusTimes?: FocusTimeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUpdateManyWithoutUserNestedInput
    standups?: StandupUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UserTeamUncheckedUpdateManyWithoutUserNestedInput
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    pairSessions?: PairSessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutUserNestedInput
    focusTimes?: FocusTimeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTeamCreateManyUserInput = {
    id?: string
    teamId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupCreateManyUserInput = {
    id?: string
    teamId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairSessionParticipantCreateManyUserInput = {
    id?: string
    sessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusTimeCreateManyUserInput = {
    id?: string
    date?: Date | string
    minutes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTeamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserTeamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutStandupsNestedInput
    tags?: TagUpdateManyWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: PairProgrammingSessionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type PairSessionParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPullRequestsNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusTimeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusTimeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusTimeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    minutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamCreateManyTeamInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairProgrammingSessionCreateManyTeamInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    startTime: Date | string
    endTime?: Date | string | null
    recordingUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestCreateManyTeamInput = {
    id?: string
    title: string
    description?: string | null
    number: number
    url: string
    status?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StandupCreateManyTeamInput = {
    id?: string
    userId: string
    yesterday?: string | null
    today?: string | null
    blockers?: string | null
    audioUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationCreateManyTeamInput = {
    id?: string
    email: string
    status?: string
    role?: string
    invitedBy: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTeamUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type UserTeamUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTeamUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairProgrammingSessionUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: PairSessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type PairProgrammingSessionUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: PairSessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type PairProgrammingSessionUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStandupsNestedInput
    tags?: TagUpdateManyWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStandupsNestedInput
    team?: TeamUpdateOneRequiredWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandupUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: NullableStringFieldUpdateOperationsInput | string | null
    today?: NullableStringFieldUpdateOperationsInput | string | null
    blockers?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantCreateManySessionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PairSessionParticipantUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPairSessionsNestedInput
  }

  export type PairSessionParticipantUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairSessionParticipantUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}