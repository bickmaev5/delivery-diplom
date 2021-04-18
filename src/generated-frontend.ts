import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email: Scalars['String'];
  id: Scalars['String'];
  picture: Scalars['String'];
};

/** columns and relationships of "catalog" */
export type Catalog = {
  __typename?: 'catalog';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** columns and relationships of "catalog" */
export type CatalogProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** columns and relationships of "catalog" */
export type CatalogProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** aggregated selection of "catalog" */
export type Catalog_Aggregate = {
  __typename?: 'catalog_aggregate';
  aggregate?: Maybe<Catalog_Aggregate_Fields>;
  nodes: Array<Catalog>;
};

/** aggregate fields of "catalog" */
export type Catalog_Aggregate_Fields = {
  __typename?: 'catalog_aggregate_fields';
  avg?: Maybe<Catalog_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Catalog_Max_Fields>;
  min?: Maybe<Catalog_Min_Fields>;
  stddev?: Maybe<Catalog_Stddev_Fields>;
  stddev_pop?: Maybe<Catalog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Catalog_Stddev_Samp_Fields>;
  sum?: Maybe<Catalog_Sum_Fields>;
  var_pop?: Maybe<Catalog_Var_Pop_Fields>;
  var_samp?: Maybe<Catalog_Var_Samp_Fields>;
  variance?: Maybe<Catalog_Variance_Fields>;
};


/** aggregate fields of "catalog" */
export type Catalog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Catalog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Catalog_Avg_Fields = {
  __typename?: 'catalog_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "catalog". All fields are combined with a logical 'AND'. */
export type Catalog_Bool_Exp = {
  _and?: Maybe<Array<Catalog_Bool_Exp>>;
  _not?: Maybe<Catalog_Bool_Exp>;
  _or?: Maybe<Array<Catalog_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
};

/** unique or primary key constraints on table "catalog" */
export enum Catalog_Constraint {
  /** unique or primary key constraint */
  CatalogPkey = 'catalog_pkey'
}

/** input type for incrementing numeric columns in table "catalog" */
export type Catalog_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "catalog" */
export type Catalog_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Catalog_Max_Fields = {
  __typename?: 'catalog_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Catalog_Min_Fields = {
  __typename?: 'catalog_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "catalog" */
export type Catalog_Mutation_Response = {
  __typename?: 'catalog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Catalog>;
};

/** input type for inserting object relation for remote table "catalog" */
export type Catalog_Obj_Rel_Insert_Input = {
  data: Catalog_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Catalog_On_Conflict>;
};

/** on conflict condition type for table "catalog" */
export type Catalog_On_Conflict = {
  constraint: Catalog_Constraint;
  update_columns: Array<Catalog_Update_Column>;
  where?: Maybe<Catalog_Bool_Exp>;
};

/** Ordering options when selecting data from "catalog". */
export type Catalog_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: catalog */
export type Catalog_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "catalog" */
export enum Catalog_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "catalog" */
export type Catalog_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Catalog_Stddev_Fields = {
  __typename?: 'catalog_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Catalog_Stddev_Pop_Fields = {
  __typename?: 'catalog_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Catalog_Stddev_Samp_Fields = {
  __typename?: 'catalog_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Catalog_Sum_Fields = {
  __typename?: 'catalog_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "catalog" */
export enum Catalog_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Catalog_Var_Pop_Fields = {
  __typename?: 'catalog_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Catalog_Var_Samp_Fields = {
  __typename?: 'catalog_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Catalog_Variance_Fields = {
  __typename?: 'catalog_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "catalog" */
  delete_catalog?: Maybe<Catalog_Mutation_Response>;
  /** delete single row from the table: "catalog" */
  delete_catalog_by_pk?: Maybe<Catalog>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "catalog" */
  insert_catalog?: Maybe<Catalog_Mutation_Response>;
  /** insert a single row into the table: "catalog" */
  insert_catalog_one?: Maybe<Catalog>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "catalog" */
  update_catalog?: Maybe<Catalog_Mutation_Response>;
  /** update single row of the table: "catalog" */
  update_catalog_by_pk?: Maybe<Catalog>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CatalogArgs = {
  where: Catalog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Catalog_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CatalogArgs = {
  objects: Array<Catalog_Insert_Input>;
  on_conflict?: Maybe<Catalog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Catalog_OneArgs = {
  object: Catalog_Insert_Input;
  on_conflict?: Maybe<Catalog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CatalogArgs = {
  _inc?: Maybe<Catalog_Inc_Input>;
  _set?: Maybe<Catalog_Set_Input>;
  where: Catalog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Catalog_By_PkArgs = {
  _inc?: Maybe<Catalog_Inc_Input>;
  _set?: Maybe<Catalog_Set_Input>;
  pk_columns: Catalog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  catalog: Catalog;
  catalog_id: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  catalog?: Maybe<Catalog_Bool_Exp>;
  catalog_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  catalog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  catalog?: Maybe<Catalog_Obj_Rel_Insert_Input>;
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  catalog_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  catalog_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  catalog?: Maybe<Catalog_Order_By>;
  catalog_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CatalogId = 'catalog_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  catalog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CatalogId = 'catalog_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  auth0?: Maybe<Auth0_Profile>;
  /** fetch data from the table: "catalog" */
  catalog: Array<Catalog>;
  /** fetch aggregated fields from the table: "catalog" */
  catalog_aggregate: Catalog_Aggregate;
  /** fetch data from the table: "catalog" using primary key columns */
  catalog_by_pk?: Maybe<Catalog>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCatalogArgs = {
  distinct_on?: Maybe<Array<Catalog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Catalog_Order_By>>;
  where?: Maybe<Catalog_Bool_Exp>;
};


export type Query_RootCatalog_AggregateArgs = {
  distinct_on?: Maybe<Array<Catalog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Catalog_Order_By>>;
  where?: Maybe<Catalog_Bool_Exp>;
};


export type Query_RootCatalog_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "catalog" */
  catalog: Array<Catalog>;
  /** fetch aggregated fields from the table: "catalog" */
  catalog_aggregate: Catalog_Aggregate;
  /** fetch data from the table: "catalog" using primary key columns */
  catalog_by_pk?: Maybe<Catalog>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCatalogArgs = {
  distinct_on?: Maybe<Array<Catalog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Catalog_Order_By>>;
  where?: Maybe<Catalog_Bool_Exp>;
};


export type Subscription_RootCatalog_AggregateArgs = {
  distinct_on?: Maybe<Array<Catalog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Catalog_Order_By>>;
  where?: Maybe<Catalog_Bool_Exp>;
};


export type Subscription_RootCatalog_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture'
}



export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;