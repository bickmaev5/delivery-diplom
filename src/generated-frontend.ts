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
  uuid: any;
};

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email: Scalars['String'];
  id: Scalars['String'];
  picture: Scalars['String'];
};

export type CartItems = {
  __typename?: 'cartItems';
  cartId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type CartItems_Aggregate = {
  __typename?: 'cartItems_aggregate';
  aggregate?: Maybe<CartItems_Aggregate_Fields>;
  nodes: Array<CartItems>;
};

export type CartItems_Aggregate_Fields = {
  __typename?: 'cartItems_aggregate_fields';
  avg?: Maybe<CartItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<CartItems_Max_Fields>;
  min?: Maybe<CartItems_Min_Fields>;
  stddev?: Maybe<CartItems_Stddev_Fields>;
  stddev_pop?: Maybe<CartItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<CartItems_Stddev_Samp_Fields>;
  sum?: Maybe<CartItems_Sum_Fields>;
  var_pop?: Maybe<CartItems_Var_Pop_Fields>;
  var_samp?: Maybe<CartItems_Var_Samp_Fields>;
  variance?: Maybe<CartItems_Variance_Fields>;
};


export type CartItems_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CartItems_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type CartItems_Aggregate_Order_By = {
  avg?: Maybe<CartItems_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<CartItems_Max_Order_By>;
  min?: Maybe<CartItems_Min_Order_By>;
  stddev?: Maybe<CartItems_Stddev_Order_By>;
  stddev_pop?: Maybe<CartItems_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<CartItems_Stddev_Samp_Order_By>;
  sum?: Maybe<CartItems_Sum_Order_By>;
  var_pop?: Maybe<CartItems_Var_Pop_Order_By>;
  var_samp?: Maybe<CartItems_Var_Samp_Order_By>;
  variance?: Maybe<CartItems_Variance_Order_By>;
};

export type CartItems_Arr_Rel_Insert_Input = {
  data: Array<CartItems_Insert_Input>;
  on_conflict?: Maybe<CartItems_On_Conflict>;
};

export type CartItems_Avg_Fields = {
  __typename?: 'cartItems_avg_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Avg_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Bool_Exp = {
  _and?: Maybe<Array<CartItems_Bool_Exp>>;
  _not?: Maybe<CartItems_Bool_Exp>;
  _or?: Maybe<Array<CartItems_Bool_Exp>>;
  cartId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  productId?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
};

export enum CartItems_Constraint {
  CartItemsPkey = 'cartItems_pkey'
}

export type CartItems_Inc_Input = {
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItems_Insert_Input = {
  cartId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItems_Max_Fields = {
  __typename?: 'cartItems_max_fields';
  cartId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItems_Max_Order_By = {
  cartId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Min_Fields = {
  __typename?: 'cartItems_min_fields';
  cartId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItems_Min_Order_By = {
  cartId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Mutation_Response = {
  __typename?: 'cartItems_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<CartItems>;
};

export type CartItems_On_Conflict = {
  constraint: CartItems_Constraint;
  update_columns: Array<CartItems_Update_Column>;
  where?: Maybe<CartItems_Bool_Exp>;
};

export type CartItems_Order_By = {
  cartId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum CartItems_Select_Column {
  CartId = 'cartId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity'
}

export type CartItems_Set_Input = {
  cartId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItems_Stddev_Fields = {
  __typename?: 'cartItems_stddev_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Stddev_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Stddev_Pop_Fields = {
  __typename?: 'cartItems_stddev_pop_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Stddev_Pop_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Stddev_Samp_Fields = {
  __typename?: 'cartItems_stddev_samp_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Stddev_Samp_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Sum_Fields = {
  __typename?: 'cartItems_sum_fields';
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItems_Sum_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export enum CartItems_Update_Column {
  CartId = 'cartId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity'
}

export type CartItems_Var_Pop_Fields = {
  __typename?: 'cartItems_var_pop_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Var_Pop_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Var_Samp_Fields = {
  __typename?: 'cartItems_var_samp_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Var_Samp_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type CartItems_Variance_Fields = {
  __typename?: 'cartItems_variance_fields';
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItems_Variance_Order_By = {
  productId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

export type Catalog = {
  __typename?: 'catalog';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  products: Array<Products>;
  products_aggregate: Products_Aggregate;
};


export type CatalogProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type CatalogProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Catalog_Aggregate = {
  __typename?: 'catalog_aggregate';
  aggregate?: Maybe<Catalog_Aggregate_Fields>;
  nodes: Array<Catalog>;
};

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


export type Catalog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Catalog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Catalog_Avg_Fields = {
  __typename?: 'catalog_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Catalog_Bool_Exp = {
  _and?: Maybe<Array<Catalog_Bool_Exp>>;
  _not?: Maybe<Catalog_Bool_Exp>;
  _or?: Maybe<Array<Catalog_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
};

export enum Catalog_Constraint {
  CatalogPkey = 'catalog_pkey'
}

export type Catalog_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Catalog_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
};

export type Catalog_Max_Fields = {
  __typename?: 'catalog_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Catalog_Min_Fields = {
  __typename?: 'catalog_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Catalog_Mutation_Response = {
  __typename?: 'catalog_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Catalog>;
};

export type Catalog_Obj_Rel_Insert_Input = {
  data: Catalog_Insert_Input;
  on_conflict?: Maybe<Catalog_On_Conflict>;
};

export type Catalog_On_Conflict = {
  constraint: Catalog_Constraint;
  update_columns: Array<Catalog_Update_Column>;
  where?: Maybe<Catalog_Bool_Exp>;
};

export type Catalog_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
};

export type Catalog_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Catalog_Select_Column {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type Catalog_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Catalog_Stddev_Fields = {
  __typename?: 'catalog_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Catalog_Stddev_Pop_Fields = {
  __typename?: 'catalog_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Catalog_Stddev_Samp_Fields = {
  __typename?: 'catalog_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Catalog_Sum_Fields = {
  __typename?: 'catalog_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export enum Catalog_Update_Column {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type Catalog_Var_Pop_Fields = {
  __typename?: 'catalog_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Catalog_Var_Samp_Fields = {
  __typename?: 'catalog_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Catalog_Variance_Fields = {
  __typename?: 'catalog_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

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

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_cartItems?: Maybe<CartItems_Mutation_Response>;
  delete_cartItems_by_pk?: Maybe<CartItems>;
  delete_catalog?: Maybe<Catalog_Mutation_Response>;
  delete_catalog_by_pk?: Maybe<Catalog>;
  delete_products?: Maybe<Products_Mutation_Response>;
  delete_products_by_pk?: Maybe<Products>;
  delete_shoppingCart?: Maybe<ShoppingCart_Mutation_Response>;
  delete_shoppingCart_by_pk?: Maybe<ShoppingCart>;
  delete_users?: Maybe<Users_Mutation_Response>;
  delete_users_by_pk?: Maybe<Users>;
  insert_cartItems?: Maybe<CartItems_Mutation_Response>;
  insert_cartItems_one?: Maybe<CartItems>;
  insert_catalog?: Maybe<Catalog_Mutation_Response>;
  insert_catalog_one?: Maybe<Catalog>;
  insert_products?: Maybe<Products_Mutation_Response>;
  insert_products_one?: Maybe<Products>;
  insert_shoppingCart?: Maybe<ShoppingCart_Mutation_Response>;
  insert_shoppingCart_one?: Maybe<ShoppingCart>;
  insert_users?: Maybe<Users_Mutation_Response>;
  insert_users_one?: Maybe<Users>;
  update_cartItems?: Maybe<CartItems_Mutation_Response>;
  update_cartItems_by_pk?: Maybe<CartItems>;
  update_catalog?: Maybe<Catalog_Mutation_Response>;
  update_catalog_by_pk?: Maybe<Catalog>;
  update_products?: Maybe<Products_Mutation_Response>;
  update_products_by_pk?: Maybe<Products>;
  update_shoppingCart?: Maybe<ShoppingCart_Mutation_Response>;
  update_shoppingCart_by_pk?: Maybe<ShoppingCart>;
  update_users?: Maybe<Users_Mutation_Response>;
  update_users_by_pk?: Maybe<Users>;
};


export type Mutation_RootDelete_CartItemsArgs = {
  where: CartItems_Bool_Exp;
};


export type Mutation_RootDelete_CartItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_CatalogArgs = {
  where: Catalog_Bool_Exp;
};


export type Mutation_RootDelete_Catalog_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_ShoppingCartArgs = {
  where: ShoppingCart_Bool_Exp;
};


export type Mutation_RootDelete_ShoppingCart_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootInsert_CartItemsArgs = {
  objects: Array<CartItems_Insert_Input>;
  on_conflict?: Maybe<CartItems_On_Conflict>;
};


export type Mutation_RootInsert_CartItems_OneArgs = {
  object: CartItems_Insert_Input;
  on_conflict?: Maybe<CartItems_On_Conflict>;
};


export type Mutation_RootInsert_CatalogArgs = {
  objects: Array<Catalog_Insert_Input>;
  on_conflict?: Maybe<Catalog_On_Conflict>;
};


export type Mutation_RootInsert_Catalog_OneArgs = {
  object: Catalog_Insert_Input;
  on_conflict?: Maybe<Catalog_On_Conflict>;
};


export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


export type Mutation_RootInsert_ShoppingCartArgs = {
  objects: Array<ShoppingCart_Insert_Input>;
  on_conflict?: Maybe<ShoppingCart_On_Conflict>;
};


export type Mutation_RootInsert_ShoppingCart_OneArgs = {
  object: ShoppingCart_Insert_Input;
  on_conflict?: Maybe<ShoppingCart_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_CartItemsArgs = {
  _inc?: Maybe<CartItems_Inc_Input>;
  _set?: Maybe<CartItems_Set_Input>;
  where: CartItems_Bool_Exp;
};


export type Mutation_RootUpdate_CartItems_By_PkArgs = {
  _inc?: Maybe<CartItems_Inc_Input>;
  _set?: Maybe<CartItems_Set_Input>;
  pk_columns: CartItems_Pk_Columns_Input;
};


export type Mutation_RootUpdate_CatalogArgs = {
  _inc?: Maybe<Catalog_Inc_Input>;
  _set?: Maybe<Catalog_Set_Input>;
  where: Catalog_Bool_Exp;
};


export type Mutation_RootUpdate_Catalog_By_PkArgs = {
  _inc?: Maybe<Catalog_Inc_Input>;
  _set?: Maybe<Catalog_Set_Input>;
  pk_columns: Catalog_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ShoppingCartArgs = {
  _set?: Maybe<ShoppingCart_Set_Input>;
  where: ShoppingCart_Bool_Exp;
};


export type Mutation_RootUpdate_ShoppingCart_By_PkArgs = {
  _set?: Maybe<ShoppingCart_Set_Input>;
  pk_columns: ShoppingCart_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Products = {
  __typename?: 'products';
  catalog: Catalog;
  catalog_id: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

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


export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

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

export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Avg_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

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

export enum Products_Constraint {
  ProductsPkey = 'products_pkey'
}

export type Products_Inc_Input = {
  catalog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Products_Insert_Input = {
  catalog?: Maybe<Catalog_Obj_Rel_Insert_Input>;
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Products_Max_Order_By = {
  catalog_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Products_Min_Order_By = {
  catalog_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Products>;
};

export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

export type Products_Order_By = {
  catalog?: Maybe<Catalog_Order_By>;
  catalog_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

export type Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Products_Select_Column {
  CatalogId = 'catalog_id',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Picture = 'picture'
}

export type Products_Set_Input = {
  catalog_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Stddev_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Stddev_Pop_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Stddev_Samp_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  catalog_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Products_Sum_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Products_Update_Column {
  CatalogId = 'catalog_id',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Picture = 'picture'
}

export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Var_Pop_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Var_Samp_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  catalog_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Products_Variance_Order_By = {
  catalog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  auth0?: Maybe<Auth0_Profile>;
  cartItems: Array<CartItems>;
  cartItems_aggregate: CartItems_Aggregate;
  cartItems_by_pk?: Maybe<CartItems>;
  catalog: Array<Catalog>;
  catalog_aggregate: Catalog_Aggregate;
  catalog_by_pk?: Maybe<Catalog>;
  products: Array<Products>;
  products_aggregate: Products_Aggregate;
  products_by_pk?: Maybe<Products>;
  shoppingCart: Array<ShoppingCart>;
  shoppingCart_aggregate: ShoppingCart_Aggregate;
  shoppingCart_by_pk?: Maybe<ShoppingCart>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCartItemsArgs = {
  distinct_on?: Maybe<Array<CartItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CartItems_Order_By>>;
  where?: Maybe<CartItems_Bool_Exp>;
};


export type Query_RootCartItems_AggregateArgs = {
  distinct_on?: Maybe<Array<CartItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CartItems_Order_By>>;
  where?: Maybe<CartItems_Bool_Exp>;
};


export type Query_RootCartItems_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Query_RootShoppingCartArgs = {
  distinct_on?: Maybe<Array<ShoppingCart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShoppingCart_Order_By>>;
  where?: Maybe<ShoppingCart_Bool_Exp>;
};


export type Query_RootShoppingCart_AggregateArgs = {
  distinct_on?: Maybe<Array<ShoppingCart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShoppingCart_Order_By>>;
  where?: Maybe<ShoppingCart_Bool_Exp>;
};


export type Query_RootShoppingCart_By_PkArgs = {
  id: Scalars['uuid'];
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

export type ShoppingCart = {
  __typename?: 'shoppingCart';
  cartItems: Array<CartItems>;
  cartItems_aggregate: CartItems_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  userId: Scalars['String'];
};


export type ShoppingCartCartItemsArgs = {
  distinct_on?: Maybe<Array<CartItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CartItems_Order_By>>;
  where?: Maybe<CartItems_Bool_Exp>;
};


export type ShoppingCartCartItems_AggregateArgs = {
  distinct_on?: Maybe<Array<CartItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CartItems_Order_By>>;
  where?: Maybe<CartItems_Bool_Exp>;
};

export type ShoppingCart_Aggregate = {
  __typename?: 'shoppingCart_aggregate';
  aggregate?: Maybe<ShoppingCart_Aggregate_Fields>;
  nodes: Array<ShoppingCart>;
};

export type ShoppingCart_Aggregate_Fields = {
  __typename?: 'shoppingCart_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ShoppingCart_Max_Fields>;
  min?: Maybe<ShoppingCart_Min_Fields>;
};


export type ShoppingCart_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ShoppingCart_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type ShoppingCart_Bool_Exp = {
  _and?: Maybe<Array<ShoppingCart_Bool_Exp>>;
  _not?: Maybe<ShoppingCart_Bool_Exp>;
  _or?: Maybe<Array<ShoppingCart_Bool_Exp>>;
  cartItems?: Maybe<CartItems_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

export enum ShoppingCart_Constraint {
  ShoppingCartPkey = 'shoppingCart_pkey'
}

export type ShoppingCart_Insert_Input = {
  cartItems?: Maybe<CartItems_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShoppingCart_Max_Fields = {
  __typename?: 'shoppingCart_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShoppingCart_Min_Fields = {
  __typename?: 'shoppingCart_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShoppingCart_Mutation_Response = {
  __typename?: 'shoppingCart_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<ShoppingCart>;
};

export type ShoppingCart_On_Conflict = {
  constraint: ShoppingCart_Constraint;
  update_columns: Array<ShoppingCart_Update_Column>;
  where?: Maybe<ShoppingCart_Bool_Exp>;
};

export type ShoppingCart_Order_By = {
  cartItems_aggregate?: Maybe<CartItems_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type ShoppingCart_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum ShoppingCart_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  UserId = 'userId'
}

export type ShoppingCart_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

export enum ShoppingCart_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  UserId = 'userId'
}

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _niregex?: Maybe<Scalars['String']>;
  _nlike?: Maybe<Scalars['String']>;
  _nregex?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _regex?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  cartItems: Array<CartItems>;
  cartItems_aggregate: CartItems_Aggregate;
  cartItems_by_pk?: Maybe<CartItems>;
  catalog: Array<Catalog>;
  catalog_aggregate: Catalog_Aggregate;
  catalog_by_pk?: Maybe<Catalog>;
  products: Array<Products>;
  products_aggregate: Products_Aggregate;
  products_by_pk?: Maybe<Products>;
  shoppingCart: Array<ShoppingCart>;
  shoppingCart_aggregate: ShoppingCart_Aggregate;
  shoppingCart_by_pk?: Maybe<ShoppingCart>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCartItemsArgs = {
  distinct_on?: Maybe<Array<CartItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CartItems_Order_By>>;
  where?: Maybe<CartItems_Bool_Exp>;
};


export type Subscription_RootCartItems_AggregateArgs = {
  distinct_on?: Maybe<Array<CartItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CartItems_Order_By>>;
  where?: Maybe<CartItems_Bool_Exp>;
};


export type Subscription_RootCartItems_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootShoppingCartArgs = {
  distinct_on?: Maybe<Array<ShoppingCart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShoppingCart_Order_By>>;
  where?: Maybe<ShoppingCart_Bool_Exp>;
};


export type Subscription_RootShoppingCart_AggregateArgs = {
  distinct_on?: Maybe<Array<ShoppingCart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShoppingCart_Order_By>>;
  where?: Maybe<ShoppingCart_Bool_Exp>;
};


export type Subscription_RootShoppingCart_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
};

export enum Users_Constraint {
  UsersPkey = 'users_pkey'
}

export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Users_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  LastSeen = 'last_seen',
  Name = 'name',
  Phone = 'phone',
  Picture = 'picture'
}

export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export enum Users_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  LastSeen = 'last_seen',
  Name = 'name',
  Phone = 'phone',
  Picture = 'picture'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};



export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;