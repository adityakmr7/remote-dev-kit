
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
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Standup
 * 
 */
export type Standup = $Result.DefaultSelection<Prisma.$StandupPayload>
/**
 * Model StatusUpdate
 * 
 */
export type StatusUpdate = $Result.DefaultSelection<Prisma.$StatusUpdatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  github: 'github',
  email: 'email'
};

export type Provider = (typeof Provider)[keyof typeof Provider]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

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
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.statusUpdate`: Exposes CRUD operations for the **StatusUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusUpdates
    * const statusUpdates = await prisma.statusUpdate.findMany()
    * ```
    */
  get statusUpdate(): Prisma.StatusUpdateDelegate<ExtArgs, ClientOptions>;
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
    TeamMember: 'TeamMember',
    Standup: 'Standup',
    StatusUpdate: 'StatusUpdate'
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
      modelProps: "user" | "team" | "teamMember" | "standup" | "statusUpdate"
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
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
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
      StatusUpdate: {
        payload: Prisma.$StatusUpdatePayload<ExtArgs>
        fields: Prisma.StatusUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>
          }
          findFirst: {
            args: Prisma.StatusUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>
          }
          findMany: {
            args: Prisma.StatusUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>[]
          }
          create: {
            args: Prisma.StatusUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>
          }
          createMany: {
            args: Prisma.StatusUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>[]
          }
          delete: {
            args: Prisma.StatusUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>
          }
          update: {
            args: Prisma.StatusUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>
          }
          deleteMany: {
            args: Prisma.StatusUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>[]
          }
          upsert: {
            args: Prisma.StatusUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusUpdatePayload>
          }
          aggregate: {
            args: Prisma.StatusUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusUpdate>
          }
          groupBy: {
            args: Prisma.StatusUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<StatusUpdateCountAggregateOutputType> | number
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
    teamMember?: TeamMemberOmit
    standup?: StandupOmit
    statusUpdate?: StatusUpdateOmit
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
    standups: number
    teams: number
    StatusUpdate: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    standups?: boolean | UserCountOutputTypeCountStandupsArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    StatusUpdate?: boolean | UserCountOutputTypeCountStatusUpdateArgs
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
  export type UserCountOutputTypeCountStandupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusUpdateWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    standups: number
    StatusUpdate: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    standups?: boolean | TeamCountOutputTypeCountStandupsArgs
    StatusUpdate?: boolean | TeamCountOutputTypeCountStatusUpdateArgs
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
    where?: TeamMemberWhereInput
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
  export type TeamCountOutputTypeCountStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusUpdateWhereInput
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
    name: string | null
    password: string | null
    avatarUrl: string | null
    provider: $Enums.Provider | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatarUrl: string | null
    provider: $Enums.Provider | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    avatarUrl: number
    provider: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatarUrl?: true
    provider?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatarUrl?: true
    provider?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatarUrl?: true
    provider?: true
    createdAt?: true
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
    name: string | null
    password: string | null
    avatarUrl: string | null
    provider: $Enums.Provider
    createdAt: Date
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
    name?: boolean
    password?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    standups?: boolean | User$standupsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    StatusUpdate?: boolean | User$StatusUpdateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "avatarUrl" | "provider" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    standups?: boolean | User$standupsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    StatusUpdate?: boolean | User$StatusUpdateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      standups: Prisma.$StandupPayload<ExtArgs>[]
      teams: Prisma.$TeamMemberPayload<ExtArgs>[]
      StatusUpdate: Prisma.$StatusUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string | null
      avatarUrl: string | null
      provider: $Enums.Provider
      createdAt: Date
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
    standups<T extends User$standupsArgs<ExtArgs> = {}>(args?: Subset<T, User$standupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StatusUpdate<T extends User$StatusUpdateArgs<ExtArgs> = {}>(args?: Subset<T, User$StatusUpdateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.StatusUpdate
   */
  export type User$StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    where?: StatusUpdateWhereInput
    orderBy?: StatusUpdateOrderByWithRelationInput | StatusUpdateOrderByWithRelationInput[]
    cursor?: StatusUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusUpdateScalarFieldEnum | StatusUpdateScalarFieldEnum[]
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
    createdAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
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
    createdAt: Date
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
    createdAt?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    standups?: boolean | Team$standupsArgs<ExtArgs>
    StatusUpdate?: boolean | Team$StatusUpdateArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    standups?: boolean | Team$standupsArgs<ExtArgs>
    StatusUpdate?: boolean | Team$StatusUpdateArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      standups: Prisma.$StandupPayload<ExtArgs>[]
      StatusUpdate: Prisma.$StatusUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
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
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    standups<T extends Team$standupsArgs<ExtArgs> = {}>(args?: Subset<T, Team$standupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StatusUpdate<T extends Team$StatusUpdateArgs<ExtArgs> = {}>(args?: Subset<T, Team$StatusUpdateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"Team", 'DateTime'>
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
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
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
   * Team.StatusUpdate
   */
  export type Team$StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    where?: StatusUpdateWhereInput
    orderBy?: StatusUpdateOrderByWithRelationInput | StatusUpdateOrderByWithRelationInput[]
    cursor?: StatusUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusUpdateScalarFieldEnum | StatusUpdateScalarFieldEnum[]
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
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    role: string | null
    userId: string | null
    teamId: string | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    role: string | null
    userId: string | null
    teamId: string | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    role: number
    userId: number
    teamId: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    role: string
    userId: string
    teamId: string
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "userId" | "teamId", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      userId: string
      teamId: string
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'String'>
    readonly userId: FieldRef<"TeamMember", 'String'>
    readonly teamId: FieldRef<"TeamMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
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
    date: Date | null
    userId: string | null
    teamId: string | null
    yesterday: string | null
    today: string | null
    blockers: string | null
  }

  export type StandupMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    teamId: string | null
    yesterday: string | null
    today: string | null
    blockers: string | null
  }

  export type StandupCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    teamId: number
    yesterday: number
    today: number
    blockers: number
    _all: number
  }


  export type StandupMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
  }

  export type StandupMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
  }

  export type StandupCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    teamId?: true
    yesterday?: true
    today?: true
    blockers?: true
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
    date: Date
    userId: string
    teamId: string
    yesterday: string
    today: string
    blockers: string
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
    date?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standup"]>

  export type StandupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standup"]>

  export type StandupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["standup"]>

  export type StandupSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    teamId?: boolean
    yesterday?: boolean
    today?: boolean
    blockers?: boolean
  }

  export type StandupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "userId" | "teamId" | "yesterday" | "today" | "blockers", ExtArgs["result"]["standup"]>
  export type StandupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
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
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
      teamId: string
      yesterday: string
      today: string
      blockers: string
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
    readonly date: FieldRef<"Standup", 'DateTime'>
    readonly userId: FieldRef<"Standup", 'String'>
    readonly teamId: FieldRef<"Standup", 'String'>
    readonly yesterday: FieldRef<"Standup", 'String'>
    readonly today: FieldRef<"Standup", 'String'>
    readonly blockers: FieldRef<"Standup", 'String'>
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
   * Model StatusUpdate
   */

  export type AggregateStatusUpdate = {
    _count: StatusUpdateCountAggregateOutputType | null
    _min: StatusUpdateMinAggregateOutputType | null
    _max: StatusUpdateMaxAggregateOutputType | null
  }

  export type StatusUpdateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type StatusUpdateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    status: string | null
    updatedAt: Date | null
  }

  export type StatusUpdateCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type StatusUpdateMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    status?: true
    updatedAt?: true
  }

  export type StatusUpdateMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    status?: true
    updatedAt?: true
  }

  export type StatusUpdateCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type StatusUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusUpdate to aggregate.
     */
    where?: StatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdates to fetch.
     */
    orderBy?: StatusUpdateOrderByWithRelationInput | StatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusUpdates
    **/
    _count?: true | StatusUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusUpdateMaxAggregateInputType
  }

  export type GetStatusUpdateAggregateType<T extends StatusUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusUpdate[P]>
      : GetScalarType<T[P], AggregateStatusUpdate[P]>
  }




  export type StatusUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusUpdateWhereInput
    orderBy?: StatusUpdateOrderByWithAggregationInput | StatusUpdateOrderByWithAggregationInput[]
    by: StatusUpdateScalarFieldEnum[] | StatusUpdateScalarFieldEnum
    having?: StatusUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusUpdateCountAggregateInputType | true
    _min?: StatusUpdateMinAggregateInputType
    _max?: StatusUpdateMaxAggregateInputType
  }

  export type StatusUpdateGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    status: string
    updatedAt: Date
    _count: StatusUpdateCountAggregateOutputType | null
    _min: StatusUpdateMinAggregateOutputType | null
    _max: StatusUpdateMaxAggregateOutputType | null
  }

  type GetStatusUpdateGroupByPayload<T extends StatusUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], StatusUpdateGroupByOutputType[P]>
        }
      >
    >


  export type StatusUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusUpdate"]>

  export type StatusUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusUpdate"]>

  export type StatusUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    status?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusUpdate"]>

  export type StatusUpdateSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type StatusUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "status" | "updatedAt", ExtArgs["result"]["statusUpdate"]>
  export type StatusUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type StatusUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type StatusUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $StatusUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusUpdate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      status: string
      updatedAt: Date
    }, ExtArgs["result"]["statusUpdate"]>
    composites: {}
  }

  type StatusUpdateGetPayload<S extends boolean | null | undefined | StatusUpdateDefaultArgs> = $Result.GetResult<Prisma.$StatusUpdatePayload, S>

  type StatusUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusUpdateCountAggregateInputType | true
    }

  export interface StatusUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusUpdate'], meta: { name: 'StatusUpdate' } }
    /**
     * Find zero or one StatusUpdate that matches the filter.
     * @param {StatusUpdateFindUniqueArgs} args - Arguments to find a StatusUpdate
     * @example
     * // Get one StatusUpdate
     * const statusUpdate = await prisma.statusUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusUpdateFindUniqueArgs>(args: SelectSubset<T, StatusUpdateFindUniqueArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusUpdateFindUniqueOrThrowArgs} args - Arguments to find a StatusUpdate
     * @example
     * // Get one StatusUpdate
     * const statusUpdate = await prisma.statusUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateFindFirstArgs} args - Arguments to find a StatusUpdate
     * @example
     * // Get one StatusUpdate
     * const statusUpdate = await prisma.statusUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusUpdateFindFirstArgs>(args?: SelectSubset<T, StatusUpdateFindFirstArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateFindFirstOrThrowArgs} args - Arguments to find a StatusUpdate
     * @example
     * // Get one StatusUpdate
     * const statusUpdate = await prisma.statusUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusUpdates
     * const statusUpdates = await prisma.statusUpdate.findMany()
     * 
     * // Get first 10 StatusUpdates
     * const statusUpdates = await prisma.statusUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusUpdateWithIdOnly = await prisma.statusUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusUpdateFindManyArgs>(args?: SelectSubset<T, StatusUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusUpdate.
     * @param {StatusUpdateCreateArgs} args - Arguments to create a StatusUpdate.
     * @example
     * // Create one StatusUpdate
     * const StatusUpdate = await prisma.statusUpdate.create({
     *   data: {
     *     // ... data to create a StatusUpdate
     *   }
     * })
     * 
     */
    create<T extends StatusUpdateCreateArgs>(args: SelectSubset<T, StatusUpdateCreateArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusUpdates.
     * @param {StatusUpdateCreateManyArgs} args - Arguments to create many StatusUpdates.
     * @example
     * // Create many StatusUpdates
     * const statusUpdate = await prisma.statusUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusUpdateCreateManyArgs>(args?: SelectSubset<T, StatusUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusUpdates and returns the data saved in the database.
     * @param {StatusUpdateCreateManyAndReturnArgs} args - Arguments to create many StatusUpdates.
     * @example
     * // Create many StatusUpdates
     * const statusUpdate = await prisma.statusUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusUpdates and only return the `id`
     * const statusUpdateWithIdOnly = await prisma.statusUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusUpdate.
     * @param {StatusUpdateDeleteArgs} args - Arguments to delete one StatusUpdate.
     * @example
     * // Delete one StatusUpdate
     * const StatusUpdate = await prisma.statusUpdate.delete({
     *   where: {
     *     // ... filter to delete one StatusUpdate
     *   }
     * })
     * 
     */
    delete<T extends StatusUpdateDeleteArgs>(args: SelectSubset<T, StatusUpdateDeleteArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusUpdate.
     * @param {StatusUpdateUpdateArgs} args - Arguments to update one StatusUpdate.
     * @example
     * // Update one StatusUpdate
     * const statusUpdate = await prisma.statusUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateUpdateArgs>(args: SelectSubset<T, StatusUpdateUpdateArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusUpdates.
     * @param {StatusUpdateDeleteManyArgs} args - Arguments to filter StatusUpdates to delete.
     * @example
     * // Delete a few StatusUpdates
     * const { count } = await prisma.statusUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusUpdateDeleteManyArgs>(args?: SelectSubset<T, StatusUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusUpdates
     * const statusUpdate = await prisma.statusUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateUpdateManyArgs>(args: SelectSubset<T, StatusUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusUpdates and returns the data updated in the database.
     * @param {StatusUpdateUpdateManyAndReturnArgs} args - Arguments to update many StatusUpdates.
     * @example
     * // Update many StatusUpdates
     * const statusUpdate = await prisma.statusUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusUpdates and only return the `id`
     * const statusUpdateWithIdOnly = await prisma.statusUpdate.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatusUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusUpdate.
     * @param {StatusUpdateUpsertArgs} args - Arguments to update or create a StatusUpdate.
     * @example
     * // Update or create a StatusUpdate
     * const statusUpdate = await prisma.statusUpdate.upsert({
     *   create: {
     *     // ... data to create a StatusUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusUpdate we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpdateUpsertArgs>(args: SelectSubset<T, StatusUpdateUpsertArgs<ExtArgs>>): Prisma__StatusUpdateClient<$Result.GetResult<Prisma.$StatusUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateCountArgs} args - Arguments to filter StatusUpdates to count.
     * @example
     * // Count the number of StatusUpdates
     * const count = await prisma.statusUpdate.count({
     *   where: {
     *     // ... the filter for the StatusUpdates we want to count
     *   }
     * })
    **/
    count<T extends StatusUpdateCountArgs>(
      args?: Subset<T, StatusUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusUpdateAggregateArgs>(args: Subset<T, StatusUpdateAggregateArgs>): Prisma.PrismaPromise<GetStatusUpdateAggregateType<T>>

    /**
     * Group by StatusUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateGroupByArgs} args - Group by arguments.
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
      T extends StatusUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusUpdateGroupByArgs['orderBy'] }
        : { orderBy?: StatusUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusUpdate model
   */
  readonly fields: StatusUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StatusUpdate model
   */
  interface StatusUpdateFieldRefs {
    readonly id: FieldRef<"StatusUpdate", 'String'>
    readonly userId: FieldRef<"StatusUpdate", 'String'>
    readonly teamId: FieldRef<"StatusUpdate", 'String'>
    readonly status: FieldRef<"StatusUpdate", 'String'>
    readonly updatedAt: FieldRef<"StatusUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatusUpdate findUnique
   */
  export type StatusUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdate to fetch.
     */
    where: StatusUpdateWhereUniqueInput
  }

  /**
   * StatusUpdate findUniqueOrThrow
   */
  export type StatusUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdate to fetch.
     */
    where: StatusUpdateWhereUniqueInput
  }

  /**
   * StatusUpdate findFirst
   */
  export type StatusUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdate to fetch.
     */
    where?: StatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdates to fetch.
     */
    orderBy?: StatusUpdateOrderByWithRelationInput | StatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusUpdates.
     */
    cursor?: StatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusUpdates.
     */
    distinct?: StatusUpdateScalarFieldEnum | StatusUpdateScalarFieldEnum[]
  }

  /**
   * StatusUpdate findFirstOrThrow
   */
  export type StatusUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdate to fetch.
     */
    where?: StatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdates to fetch.
     */
    orderBy?: StatusUpdateOrderByWithRelationInput | StatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusUpdates.
     */
    cursor?: StatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusUpdates.
     */
    distinct?: StatusUpdateScalarFieldEnum | StatusUpdateScalarFieldEnum[]
  }

  /**
   * StatusUpdate findMany
   */
  export type StatusUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * Filter, which StatusUpdates to fetch.
     */
    where?: StatusUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusUpdates to fetch.
     */
    orderBy?: StatusUpdateOrderByWithRelationInput | StatusUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusUpdates.
     */
    cursor?: StatusUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusUpdates.
     */
    skip?: number
    distinct?: StatusUpdateScalarFieldEnum | StatusUpdateScalarFieldEnum[]
  }

  /**
   * StatusUpdate create
   */
  export type StatusUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusUpdate.
     */
    data: XOR<StatusUpdateCreateInput, StatusUpdateUncheckedCreateInput>
  }

  /**
   * StatusUpdate createMany
   */
  export type StatusUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusUpdates.
     */
    data: StatusUpdateCreateManyInput | StatusUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusUpdate createManyAndReturn
   */
  export type StatusUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many StatusUpdates.
     */
    data: StatusUpdateCreateManyInput | StatusUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusUpdate update
   */
  export type StatusUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusUpdate.
     */
    data: XOR<StatusUpdateUpdateInput, StatusUpdateUncheckedUpdateInput>
    /**
     * Choose, which StatusUpdate to update.
     */
    where: StatusUpdateWhereUniqueInput
  }

  /**
   * StatusUpdate updateMany
   */
  export type StatusUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusUpdates.
     */
    data: XOR<StatusUpdateUpdateManyMutationInput, StatusUpdateUncheckedUpdateManyInput>
    /**
     * Filter which StatusUpdates to update
     */
    where?: StatusUpdateWhereInput
    /**
     * Limit how many StatusUpdates to update.
     */
    limit?: number
  }

  /**
   * StatusUpdate updateManyAndReturn
   */
  export type StatusUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * The data used to update StatusUpdates.
     */
    data: XOR<StatusUpdateUpdateManyMutationInput, StatusUpdateUncheckedUpdateManyInput>
    /**
     * Filter which StatusUpdates to update
     */
    where?: StatusUpdateWhereInput
    /**
     * Limit how many StatusUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusUpdate upsert
   */
  export type StatusUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusUpdate to update in case it exists.
     */
    where: StatusUpdateWhereUniqueInput
    /**
     * In case the StatusUpdate found by the `where` argument doesn't exist, create a new StatusUpdate with this data.
     */
    create: XOR<StatusUpdateCreateInput, StatusUpdateUncheckedCreateInput>
    /**
     * In case the StatusUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateUpdateInput, StatusUpdateUncheckedUpdateInput>
  }

  /**
   * StatusUpdate delete
   */
  export type StatusUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
    /**
     * Filter which StatusUpdate to delete.
     */
    where: StatusUpdateWhereUniqueInput
  }

  /**
   * StatusUpdate deleteMany
   */
  export type StatusUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusUpdates to delete
     */
    where?: StatusUpdateWhereInput
    /**
     * Limit how many StatusUpdates to delete.
     */
    limit?: number
  }

  /**
   * StatusUpdate without action
   */
  export type StatusUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusUpdate
     */
    select?: StatusUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusUpdate
     */
    omit?: StatusUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusUpdateInclude<ExtArgs> | null
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
    name: 'name',
    password: 'password',
    avatarUrl: 'avatarUrl',
    provider: 'provider',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    userId: 'userId',
    teamId: 'teamId'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const StandupScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    teamId: 'teamId',
    yesterday: 'yesterday',
    today: 'today',
    blockers: 'blockers'
  };

  export type StandupScalarFieldEnum = (typeof StandupScalarFieldEnum)[keyof typeof StandupScalarFieldEnum]


  export const StatusUpdateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type StatusUpdateScalarFieldEnum = (typeof StatusUpdateScalarFieldEnum)[keyof typeof StatusUpdateScalarFieldEnum]


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
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeFilter<"User"> | Date | string
    standups?: StandupListRelationFilter
    teams?: TeamMemberListRelationFilter
    StatusUpdate?: StatusUpdateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    standups?: StandupOrderByRelationAggregateInput
    teams?: TeamMemberOrderByRelationAggregateInput
    StatusUpdate?: StatusUpdateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeFilter<"User"> | Date | string
    standups?: StandupListRelationFilter
    teams?: TeamMemberListRelationFilter
    StatusUpdate?: StatusUpdateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    standups?: StandupListRelationFilter
    StatusUpdate?: StatusUpdateListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    members?: TeamMemberOrderByRelationAggregateInput
    standups?: StandupOrderByRelationAggregateInput
    StatusUpdate?: StatusUpdateOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    standups?: StandupListRelationFilter
    StatusUpdate?: StatusUpdateListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    role?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: StringWithAggregatesFilter<"TeamMember"> | string
    userId?: StringWithAggregatesFilter<"TeamMember"> | string
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string
  }

  export type StandupWhereInput = {
    AND?: StandupWhereInput | StandupWhereInput[]
    OR?: StandupWhereInput[]
    NOT?: StandupWhereInput | StandupWhereInput[]
    id?: StringFilter<"Standup"> | string
    date?: DateTimeFilter<"Standup"> | Date | string
    userId?: StringFilter<"Standup"> | string
    teamId?: StringFilter<"Standup"> | string
    yesterday?: StringFilter<"Standup"> | string
    today?: StringFilter<"Standup"> | string
    blockers?: StringFilter<"Standup"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type StandupOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type StandupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StandupWhereInput | StandupWhereInput[]
    OR?: StandupWhereInput[]
    NOT?: StandupWhereInput | StandupWhereInput[]
    date?: DateTimeFilter<"Standup"> | Date | string
    userId?: StringFilter<"Standup"> | string
    teamId?: StringFilter<"Standup"> | string
    yesterday?: StringFilter<"Standup"> | string
    today?: StringFilter<"Standup"> | string
    blockers?: StringFilter<"Standup"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type StandupOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
    _count?: StandupCountOrderByAggregateInput
    _max?: StandupMaxOrderByAggregateInput
    _min?: StandupMinOrderByAggregateInput
  }

  export type StandupScalarWhereWithAggregatesInput = {
    AND?: StandupScalarWhereWithAggregatesInput | StandupScalarWhereWithAggregatesInput[]
    OR?: StandupScalarWhereWithAggregatesInput[]
    NOT?: StandupScalarWhereWithAggregatesInput | StandupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Standup"> | string
    date?: DateTimeWithAggregatesFilter<"Standup"> | Date | string
    userId?: StringWithAggregatesFilter<"Standup"> | string
    teamId?: StringWithAggregatesFilter<"Standup"> | string
    yesterday?: StringWithAggregatesFilter<"Standup"> | string
    today?: StringWithAggregatesFilter<"Standup"> | string
    blockers?: StringWithAggregatesFilter<"Standup"> | string
  }

  export type StatusUpdateWhereInput = {
    AND?: StatusUpdateWhereInput | StatusUpdateWhereInput[]
    OR?: StatusUpdateWhereInput[]
    NOT?: StatusUpdateWhereInput | StatusUpdateWhereInput[]
    id?: StringFilter<"StatusUpdate"> | string
    userId?: StringFilter<"StatusUpdate"> | string
    teamId?: StringFilter<"StatusUpdate"> | string
    status?: StringFilter<"StatusUpdate"> | string
    updatedAt?: DateTimeFilter<"StatusUpdate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type StatusUpdateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type StatusUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusUpdateWhereInput | StatusUpdateWhereInput[]
    OR?: StatusUpdateWhereInput[]
    NOT?: StatusUpdateWhereInput | StatusUpdateWhereInput[]
    userId?: StringFilter<"StatusUpdate"> | string
    teamId?: StringFilter<"StatusUpdate"> | string
    status?: StringFilter<"StatusUpdate"> | string
    updatedAt?: DateTimeFilter<"StatusUpdate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type StatusUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: StatusUpdateCountOrderByAggregateInput
    _max?: StatusUpdateMaxOrderByAggregateInput
    _min?: StatusUpdateMinOrderByAggregateInput
  }

  export type StatusUpdateScalarWhereWithAggregatesInput = {
    AND?: StatusUpdateScalarWhereWithAggregatesInput | StatusUpdateScalarWhereWithAggregatesInput[]
    OR?: StatusUpdateScalarWhereWithAggregatesInput[]
    NOT?: StatusUpdateScalarWhereWithAggregatesInput | StatusUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusUpdate"> | string
    userId?: StringWithAggregatesFilter<"StatusUpdate"> | string
    teamId?: StringWithAggregatesFilter<"StatusUpdate"> | string
    status?: StringWithAggregatesFilter<"StatusUpdate"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"StatusUpdate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    standups?: StandupCreateNestedManyWithoutUserInput
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    StatusUpdate?: StatusUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    StatusUpdate?: StatusUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUpdateManyWithoutUserNestedInput
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    StatusUpdate?: StatusUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    StatusUpdate?: StatusUpdateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
    StatusUpdate?: StatusUpdateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
    StatusUpdate?: StatusUpdateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
    StatusUpdate?: StatusUpdateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
    StatusUpdate?: StatusUpdateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutTeamsInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    role: string
    userId: string
    teamId: string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    role: string
    userId: string
    teamId: string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type StandupCreateInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers: string
    user: UserCreateNestedOneWithoutStandupsInput
    team: TeamCreateNestedOneWithoutStandupsInput
  }

  export type StandupUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    teamId: string
    yesterday: string
    today: string
    blockers: string
  }

  export type StandupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStandupsNestedInput
    team?: TeamUpdateOneRequiredWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type StandupCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
    teamId: string
    yesterday: string
    today: string
    blockers: string
  }

  export type StandupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type StandupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUpdateCreateInput = {
    id?: string
    status: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStatusUpdateInput
    team: TeamCreateNestedOneWithoutStatusUpdateInput
  }

  export type StatusUpdateUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    status: string
    updatedAt?: Date | string
  }

  export type StatusUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatusUpdateNestedInput
    team?: TeamUpdateOneRequiredWithoutStatusUpdateNestedInput
  }

  export type StatusUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpdateCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    status: string
    updatedAt?: Date | string
  }

  export type StatusUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
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

  export type StandupListRelationFilter = {
    every?: StandupWhereInput
    some?: StandupWhereInput
    none?: StandupWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type StatusUpdateListRelationFilter = {
    every?: StatusUpdateWhereInput
    some?: StatusUpdateWhereInput
    none?: StatusUpdateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StandupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
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

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
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

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type StandupCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
  }

  export type StandupMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
  }

  export type StandupMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    yesterday?: SortOrder
    today?: SortOrder
    blockers?: SortOrder
  }

  export type StatusUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatusUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatusUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type StandupCreateNestedManyWithoutUserInput = {
    create?: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput> | StandupCreateWithoutUserInput[] | StandupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutUserInput | StandupCreateOrConnectWithoutUserInput[]
    createMany?: StandupCreateManyUserInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type StatusUpdateCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusUpdateCreateWithoutUserInput, StatusUpdateUncheckedCreateWithoutUserInput> | StatusUpdateCreateWithoutUserInput[] | StatusUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutUserInput | StatusUpdateCreateOrConnectWithoutUserInput[]
    createMany?: StatusUpdateCreateManyUserInputEnvelope
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
  }

  export type StandupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput> | StandupCreateWithoutUserInput[] | StandupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutUserInput | StandupCreateOrConnectWithoutUserInput[]
    createMany?: StandupCreateManyUserInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type StatusUpdateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusUpdateCreateWithoutUserInput, StatusUpdateUncheckedCreateWithoutUserInput> | StatusUpdateCreateWithoutUserInput[] | StatusUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutUserInput | StatusUpdateCreateOrConnectWithoutUserInput[]
    createMany?: StatusUpdateCreateManyUserInputEnvelope
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type StatusUpdateUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusUpdateCreateWithoutUserInput, StatusUpdateUncheckedCreateWithoutUserInput> | StatusUpdateCreateWithoutUserInput[] | StatusUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutUserInput | StatusUpdateCreateOrConnectWithoutUserInput[]
    upsert?: StatusUpdateUpsertWithWhereUniqueWithoutUserInput | StatusUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusUpdateCreateManyUserInputEnvelope
    set?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    disconnect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    delete?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    update?: StatusUpdateUpdateWithWhereUniqueWithoutUserInput | StatusUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusUpdateUpdateManyWithWhereWithoutUserInput | StatusUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusUpdateScalarWhereInput | StatusUpdateScalarWhereInput[]
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

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type StatusUpdateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusUpdateCreateWithoutUserInput, StatusUpdateUncheckedCreateWithoutUserInput> | StatusUpdateCreateWithoutUserInput[] | StatusUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutUserInput | StatusUpdateCreateOrConnectWithoutUserInput[]
    upsert?: StatusUpdateUpsertWithWhereUniqueWithoutUserInput | StatusUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusUpdateCreateManyUserInputEnvelope
    set?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    disconnect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    delete?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    update?: StatusUpdateUpdateWithWhereUniqueWithoutUserInput | StatusUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusUpdateUpdateManyWithWhereWithoutUserInput | StatusUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusUpdateScalarWhereInput | StatusUpdateScalarWhereInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type StandupCreateNestedManyWithoutTeamInput = {
    create?: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput> | StandupCreateWithoutTeamInput[] | StandupUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTeamInput | StandupCreateOrConnectWithoutTeamInput[]
    createMany?: StandupCreateManyTeamInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type StatusUpdateCreateNestedManyWithoutTeamInput = {
    create?: XOR<StatusUpdateCreateWithoutTeamInput, StatusUpdateUncheckedCreateWithoutTeamInput> | StatusUpdateCreateWithoutTeamInput[] | StatusUpdateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutTeamInput | StatusUpdateCreateOrConnectWithoutTeamInput[]
    createMany?: StatusUpdateCreateManyTeamInputEnvelope
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type StandupUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput> | StandupCreateWithoutTeamInput[] | StandupUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StandupCreateOrConnectWithoutTeamInput | StandupCreateOrConnectWithoutTeamInput[]
    createMany?: StandupCreateManyTeamInputEnvelope
    connect?: StandupWhereUniqueInput | StandupWhereUniqueInput[]
  }

  export type StatusUpdateUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<StatusUpdateCreateWithoutTeamInput, StatusUpdateUncheckedCreateWithoutTeamInput> | StatusUpdateCreateWithoutTeamInput[] | StatusUpdateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutTeamInput | StatusUpdateCreateOrConnectWithoutTeamInput[]
    createMany?: StatusUpdateCreateManyTeamInputEnvelope
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
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

  export type StatusUpdateUpdateManyWithoutTeamNestedInput = {
    create?: XOR<StatusUpdateCreateWithoutTeamInput, StatusUpdateUncheckedCreateWithoutTeamInput> | StatusUpdateCreateWithoutTeamInput[] | StatusUpdateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutTeamInput | StatusUpdateCreateOrConnectWithoutTeamInput[]
    upsert?: StatusUpdateUpsertWithWhereUniqueWithoutTeamInput | StatusUpdateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: StatusUpdateCreateManyTeamInputEnvelope
    set?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    disconnect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    delete?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    update?: StatusUpdateUpdateWithWhereUniqueWithoutTeamInput | StatusUpdateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: StatusUpdateUpdateManyWithWhereWithoutTeamInput | StatusUpdateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: StatusUpdateScalarWhereInput | StatusUpdateScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
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

  export type StatusUpdateUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<StatusUpdateCreateWithoutTeamInput, StatusUpdateUncheckedCreateWithoutTeamInput> | StatusUpdateCreateWithoutTeamInput[] | StatusUpdateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: StatusUpdateCreateOrConnectWithoutTeamInput | StatusUpdateCreateOrConnectWithoutTeamInput[]
    upsert?: StatusUpdateUpsertWithWhereUniqueWithoutTeamInput | StatusUpdateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: StatusUpdateCreateManyTeamInputEnvelope
    set?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    disconnect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    delete?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    connect?: StatusUpdateWhereUniqueInput | StatusUpdateWhereUniqueInput[]
    update?: StatusUpdateUpdateWithWhereUniqueWithoutTeamInput | StatusUpdateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: StatusUpdateUpdateManyWithWhereWithoutTeamInput | StatusUpdateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: StatusUpdateScalarWhereInput | StatusUpdateScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutStatusUpdateInput = {
    create?: XOR<UserCreateWithoutStatusUpdateInput, UserUncheckedCreateWithoutStatusUpdateInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusUpdateInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutStatusUpdateInput = {
    create?: XOR<TeamCreateWithoutStatusUpdateInput, TeamUncheckedCreateWithoutStatusUpdateInput>
    connectOrCreate?: TeamCreateOrConnectWithoutStatusUpdateInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatusUpdateNestedInput = {
    create?: XOR<UserCreateWithoutStatusUpdateInput, UserUncheckedCreateWithoutStatusUpdateInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusUpdateInput
    upsert?: UserUpsertWithoutStatusUpdateInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatusUpdateInput, UserUpdateWithoutStatusUpdateInput>, UserUncheckedUpdateWithoutStatusUpdateInput>
  }

  export type TeamUpdateOneRequiredWithoutStatusUpdateNestedInput = {
    create?: XOR<TeamCreateWithoutStatusUpdateInput, TeamUncheckedCreateWithoutStatusUpdateInput>
    connectOrCreate?: TeamCreateOrConnectWithoutStatusUpdateInput
    upsert?: TeamUpsertWithoutStatusUpdateInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutStatusUpdateInput, TeamUpdateWithoutStatusUpdateInput>, TeamUncheckedUpdateWithoutStatusUpdateInput>
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

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
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

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
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

  export type StandupCreateWithoutUserInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers: string
    team: TeamCreateNestedOneWithoutStandupsInput
  }

  export type StandupUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    teamId: string
    yesterday: string
    today: string
    blockers: string
  }

  export type StandupCreateOrConnectWithoutUserInput = {
    where: StandupWhereUniqueInput
    create: XOR<StandupCreateWithoutUserInput, StandupUncheckedCreateWithoutUserInput>
  }

  export type StandupCreateManyUserInputEnvelope = {
    data: StandupCreateManyUserInput | StandupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string
    role: string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    teamId: string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatusUpdateCreateWithoutUserInput = {
    id?: string
    status: string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutStatusUpdateInput
  }

  export type StatusUpdateUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    status: string
    updatedAt?: Date | string
  }

  export type StatusUpdateCreateOrConnectWithoutUserInput = {
    where: StatusUpdateWhereUniqueInput
    create: XOR<StatusUpdateCreateWithoutUserInput, StatusUpdateUncheckedCreateWithoutUserInput>
  }

  export type StatusUpdateCreateManyUserInputEnvelope = {
    data: StatusUpdateCreateManyUserInput | StatusUpdateCreateManyUserInput[]
    skipDuplicates?: boolean
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
    date?: DateTimeFilter<"Standup"> | Date | string
    userId?: StringFilter<"Standup"> | string
    teamId?: StringFilter<"Standup"> | string
    yesterday?: StringFilter<"Standup"> | string
    today?: StringFilter<"Standup"> | string
    blockers?: StringFilter<"Standup"> | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
  }

  export type StatusUpdateUpsertWithWhereUniqueWithoutUserInput = {
    where: StatusUpdateWhereUniqueInput
    update: XOR<StatusUpdateUpdateWithoutUserInput, StatusUpdateUncheckedUpdateWithoutUserInput>
    create: XOR<StatusUpdateCreateWithoutUserInput, StatusUpdateUncheckedCreateWithoutUserInput>
  }

  export type StatusUpdateUpdateWithWhereUniqueWithoutUserInput = {
    where: StatusUpdateWhereUniqueInput
    data: XOR<StatusUpdateUpdateWithoutUserInput, StatusUpdateUncheckedUpdateWithoutUserInput>
  }

  export type StatusUpdateUpdateManyWithWhereWithoutUserInput = {
    where: StatusUpdateScalarWhereInput
    data: XOR<StatusUpdateUpdateManyMutationInput, StatusUpdateUncheckedUpdateManyWithoutUserInput>
  }

  export type StatusUpdateScalarWhereInput = {
    AND?: StatusUpdateScalarWhereInput | StatusUpdateScalarWhereInput[]
    OR?: StatusUpdateScalarWhereInput[]
    NOT?: StatusUpdateScalarWhereInput | StatusUpdateScalarWhereInput[]
    id?: StringFilter<"StatusUpdate"> | string
    userId?: StringFilter<"StatusUpdate"> | string
    teamId?: StringFilter<"StatusUpdate"> | string
    status?: StringFilter<"StatusUpdate"> | string
    updatedAt?: DateTimeFilter<"StatusUpdate"> | Date | string
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    role: string
    userId: string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type StandupCreateWithoutTeamInput = {
    id?: string
    date: Date | string
    yesterday: string
    today: string
    blockers: string
    user: UserCreateNestedOneWithoutStandupsInput
  }

  export type StandupUncheckedCreateWithoutTeamInput = {
    id?: string
    date: Date | string
    userId: string
    yesterday: string
    today: string
    blockers: string
  }

  export type StandupCreateOrConnectWithoutTeamInput = {
    where: StandupWhereUniqueInput
    create: XOR<StandupCreateWithoutTeamInput, StandupUncheckedCreateWithoutTeamInput>
  }

  export type StandupCreateManyTeamInputEnvelope = {
    data: StandupCreateManyTeamInput | StandupCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type StatusUpdateCreateWithoutTeamInput = {
    id?: string
    status: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStatusUpdateInput
  }

  export type StatusUpdateUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    status: string
    updatedAt?: Date | string
  }

  export type StatusUpdateCreateOrConnectWithoutTeamInput = {
    where: StatusUpdateWhereUniqueInput
    create: XOR<StatusUpdateCreateWithoutTeamInput, StatusUpdateUncheckedCreateWithoutTeamInput>
  }

  export type StatusUpdateCreateManyTeamInputEnvelope = {
    data: StatusUpdateCreateManyTeamInput | StatusUpdateCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
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

  export type StatusUpdateUpsertWithWhereUniqueWithoutTeamInput = {
    where: StatusUpdateWhereUniqueInput
    update: XOR<StatusUpdateUpdateWithoutTeamInput, StatusUpdateUncheckedUpdateWithoutTeamInput>
    create: XOR<StatusUpdateCreateWithoutTeamInput, StatusUpdateUncheckedCreateWithoutTeamInput>
  }

  export type StatusUpdateUpdateWithWhereUniqueWithoutTeamInput = {
    where: StatusUpdateWhereUniqueInput
    data: XOR<StatusUpdateUpdateWithoutTeamInput, StatusUpdateUncheckedUpdateWithoutTeamInput>
  }

  export type StatusUpdateUpdateManyWithWhereWithoutTeamInput = {
    where: StatusUpdateScalarWhereInput
    data: XOR<StatusUpdateUpdateManyMutationInput, StatusUpdateUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    standups?: StandupCreateNestedManyWithoutUserInput
    StatusUpdate?: StatusUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    StatusUpdate?: StatusUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    standups?: StandupCreateNestedManyWithoutTeamInput
    StatusUpdate?: StatusUpdateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
    StatusUpdate?: StatusUpdateUncheckedCreateNestedManyWithoutTeamInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUpdateManyWithoutUserNestedInput
    StatusUpdate?: StatusUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    StatusUpdate?: StatusUpdateUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUpdateManyWithoutTeamNestedInput
    StatusUpdate?: StatusUpdateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
    StatusUpdate?: StatusUpdateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutStandupsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    teams?: TeamMemberCreateNestedManyWithoutUserInput
    StatusUpdate?: StatusUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStandupsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    StatusUpdate?: StatusUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStandupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStandupsInput, UserUncheckedCreateWithoutStandupsInput>
  }

  export type TeamCreateWithoutStandupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    StatusUpdate?: StatusUpdateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutStandupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    StatusUpdate?: StatusUpdateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutStandupsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutStandupsInput, TeamUncheckedCreateWithoutStandupsInput>
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
    StatusUpdate?: StatusUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    StatusUpdate?: StatusUpdateUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    StatusUpdate?: StatusUpdateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutStandupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    StatusUpdate?: StatusUpdateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutStatusUpdateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    standups?: StandupCreateNestedManyWithoutUserInput
    teams?: TeamMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatusUpdateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    avatarUrl?: string | null
    provider: $Enums.Provider
    createdAt?: Date | string
    standups?: StandupUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatusUpdateInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatusUpdateInput, UserUncheckedCreateWithoutStatusUpdateInput>
  }

  export type TeamCreateWithoutStatusUpdateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    standups?: StandupCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutStatusUpdateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    standups?: StandupUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutStatusUpdateInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutStatusUpdateInput, TeamUncheckedCreateWithoutStatusUpdateInput>
  }

  export type UserUpsertWithoutStatusUpdateInput = {
    update: XOR<UserUpdateWithoutStatusUpdateInput, UserUncheckedUpdateWithoutStatusUpdateInput>
    create: XOR<UserCreateWithoutStatusUpdateInput, UserUncheckedCreateWithoutStatusUpdateInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatusUpdateInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatusUpdateInput, UserUncheckedUpdateWithoutStatusUpdateInput>
  }

  export type UserUpdateWithoutStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUpdateManyWithoutUserNestedInput
    teams?: TeamMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    standups?: StandupUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutStatusUpdateInput = {
    update: XOR<TeamUpdateWithoutStatusUpdateInput, TeamUncheckedUpdateWithoutStatusUpdateInput>
    create: XOR<TeamCreateWithoutStatusUpdateInput, TeamUncheckedCreateWithoutStatusUpdateInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutStatusUpdateInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutStatusUpdateInput, TeamUncheckedUpdateWithoutStatusUpdateInput>
  }

  export type TeamUpdateWithoutStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    standups?: StandupUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    standups?: StandupUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type StandupCreateManyUserInput = {
    id?: string
    date: Date | string
    teamId: string
    yesterday: string
    today: string
    blockers: string
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string
    role: string
    teamId: string
  }

  export type StatusUpdateCreateManyUserInput = {
    id?: string
    teamId: string
    status: string
    updatedAt?: Date | string
  }

  export type StandupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type StandupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUpdateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutStatusUpdateNestedInput
  }

  export type StatusUpdateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpdateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string
    role: string
    userId: string
  }

  export type StandupCreateManyTeamInput = {
    id?: string
    date: Date | string
    userId: string
    yesterday: string
    today: string
    blockers: string
  }

  export type StatusUpdateCreateManyTeamInput = {
    id?: string
    userId: string
    status: string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StandupUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStandupsNestedInput
  }

  export type StandupUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type StandupUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    yesterday?: StringFieldUpdateOperationsInput | string
    today?: StringFieldUpdateOperationsInput | string
    blockers?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUpdateUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatusUpdateNestedInput
  }

  export type StatusUpdateUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpdateUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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