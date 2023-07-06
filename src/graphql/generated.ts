import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
};

export type BooleanExpression = {
  /** JSON value contains all of they key/value pairs */
  contained_in?: InputMaybe<Scalars['Boolean']['input']>;
  /** JSON value matches any of they key/value pairs */
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equals value */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equals value */
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is greater than or equals value */
  greater_or_equals?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is greater than value */
  greater_than?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is greater than value */
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is greater than or equals value */
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  /** JSON value contains this key */
  has_key?: InputMaybe<Scalars['Boolean']['input']>;
  /** JSON value contains all of these keys */
  has_key_all?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /** JSON value contains any of these keys */
  has_key_any?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /** Value matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is in list of values */
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /** Value matches (case-insensitive) regex pattern */
  iregex?: InputMaybe<Scalars['String']['input']>;
  /** Is value null (true) or not null (false) */
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than or equals value */
  lesser_or_equals?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than value */
  lesser_than?: InputMaybe<Scalars['Boolean']['input']>;
  /** Value matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than value */
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than or equals value */
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  /** Does not equal value */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  niregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nlike?: InputMaybe<Scalars['String']['input']>;
  /** Does not equal value */
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  not_iregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_like?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  not_regex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  not_similar?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  nregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** Value matches regex pattern */
  regex?: InputMaybe<Scalars['String']['input']>;
  /** Value matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must match entire value. */
  similar?: InputMaybe<Scalars['String']['input']>;
};

export type FloatExpression = {
  /** JSON value contains all of they key/value pairs */
  contained_in?: InputMaybe<Scalars['Float']['input']>;
  /** JSON value matches any of they key/value pairs */
  contains?: InputMaybe<Scalars['Float']['input']>;
  /** Equals value */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Equals value */
  equals?: InputMaybe<Scalars['Float']['input']>;
  /** Is greater than or equals value */
  greater_or_equals?: InputMaybe<Scalars['Float']['input']>;
  /** Is greater than value */
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  /** Is greater than value */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Is greater than or equals value */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** JSON value contains this key */
  has_key?: InputMaybe<Scalars['Float']['input']>;
  /** JSON value contains all of these keys */
  has_key_all?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** JSON value contains any of these keys */
  has_key_any?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Value matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is in list of values */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Value matches (case-insensitive) regex pattern */
  iregex?: InputMaybe<Scalars['String']['input']>;
  /** Is value null (true) or not null (false) */
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than or equals value */
  lesser_or_equals?: InputMaybe<Scalars['Float']['input']>;
  /** Is lesser than value */
  lesser_than?: InputMaybe<Scalars['Float']['input']>;
  /** Value matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than value */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Is lesser than or equals value */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Does not equal value */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  niregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nlike?: InputMaybe<Scalars['String']['input']>;
  /** Does not equal value */
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  not_iregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_like?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  not_regex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  not_similar?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  nregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** Value matches regex pattern */
  regex?: InputMaybe<Scalars['String']['input']>;
  /** Value matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must match entire value. */
  similar?: InputMaybe<Scalars['String']['input']>;
};

export type IdExpression = {
  /** JSON value contains all of they key/value pairs */
  contained_in?: InputMaybe<Scalars['ID']['input']>;
  /** JSON value matches any of they key/value pairs */
  contains?: InputMaybe<Scalars['ID']['input']>;
  /** Equals value */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** Equals value */
  equals?: InputMaybe<Scalars['ID']['input']>;
  /** Is greater than or equals value */
  greater_or_equals?: InputMaybe<Scalars['ID']['input']>;
  /** Is greater than value */
  greater_than?: InputMaybe<Scalars['ID']['input']>;
  /** Is greater than value */
  gt?: InputMaybe<Scalars['ID']['input']>;
  /** Is greater than or equals value */
  gte?: InputMaybe<Scalars['ID']['input']>;
  /** JSON value contains this key */
  has_key?: InputMaybe<Scalars['ID']['input']>;
  /** JSON value contains all of these keys */
  has_key_all?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** JSON value contains any of these keys */
  has_key_any?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Value matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is in list of values */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Value matches (case-insensitive) regex pattern */
  iregex?: InputMaybe<Scalars['String']['input']>;
  /** Is value null (true) or not null (false) */
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than or equals value */
  lesser_or_equals?: InputMaybe<Scalars['ID']['input']>;
  /** Is lesser than value */
  lesser_than?: InputMaybe<Scalars['ID']['input']>;
  /** Value matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than value */
  lt?: InputMaybe<Scalars['ID']['input']>;
  /** Is lesser than or equals value */
  lte?: InputMaybe<Scalars['ID']['input']>;
  /** Does not equal value */
  neq?: InputMaybe<Scalars['ID']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  niregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nlike?: InputMaybe<Scalars['String']['input']>;
  /** Does not equal value */
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  not_iregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_like?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  not_regex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  not_similar?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  nregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** Value matches regex pattern */
  regex?: InputMaybe<Scalars['String']['input']>;
  /** Value matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must match entire value. */
  similar?: InputMaybe<Scalars['String']['input']>;
};

export type IntExpression = {
  /** JSON value contains all of they key/value pairs */
  contained_in?: InputMaybe<Scalars['Int']['input']>;
  /** JSON value matches any of they key/value pairs */
  contains?: InputMaybe<Scalars['Int']['input']>;
  /** Equals value */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Equals value */
  equals?: InputMaybe<Scalars['Int']['input']>;
  /** Is greater than or equals value */
  greater_or_equals?: InputMaybe<Scalars['Int']['input']>;
  /** Is greater than value */
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  /** Is greater than value */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Is greater than or equals value */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** JSON value contains this key */
  has_key?: InputMaybe<Scalars['Int']['input']>;
  /** JSON value contains all of these keys */
  has_key_all?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** JSON value contains any of these keys */
  has_key_any?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Value matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is in list of values */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Value matches (case-insensitive) regex pattern */
  iregex?: InputMaybe<Scalars['String']['input']>;
  /** Is value null (true) or not null (false) */
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than or equals value */
  lesser_or_equals?: InputMaybe<Scalars['Int']['input']>;
  /** Is lesser than value */
  lesser_than?: InputMaybe<Scalars['Int']['input']>;
  /** Value matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than value */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Is lesser than or equals value */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Does not equal value */
  neq?: InputMaybe<Scalars['Int']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  niregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nlike?: InputMaybe<Scalars['String']['input']>;
  /** Does not equal value */
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  not_iregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_like?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  not_regex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  not_similar?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  nregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** Value matches regex pattern */
  regex?: InputMaybe<Scalars['String']['input']>;
  /** Value matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must match entire value. */
  similar?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  asset?: Maybe<Array<AssetOutput>>;
  assetByID?: Maybe<Array<AssetByIdOutput>>;
  asset_data?: Maybe<Array<Asset_DataOutput>>;
  asset_dataByID?: Maybe<Array<Asset_DataByIdOutput>>;
  asset_label?: Maybe<Array<Asset_LabelOutput>>;
  asset_labelByID?: Maybe<Array<Asset_LabelByIdOutput>>;
  asset_validation_metric_vw?: Maybe<Array<Asset_Validation_Metric_VwOutput>>;
  asset_validation_metric_vwByID?: Maybe<Array<Asset_Validation_Metric_VwByIdOutput>>;
  experiment?: Maybe<Array<ExperimentOutput>>;
  experimentByID?: Maybe<Array<ExperimentByIdOutput>>;
  experiment_asset?: Maybe<Array<Experiment_AssetOutput>>;
  experiment_assetByID?: Maybe<Array<Experiment_AssetByIdOutput>>;
  experiment_data?: Maybe<Array<Experiment_DataOutput>>;
  experiment_dataByID?: Maybe<Array<Experiment_DataByIdOutput>>;
  experiment_label?: Maybe<Array<Experiment_LabelOutput>>;
  experiment_labelByID?: Maybe<Array<Experiment_LabelByIdOutput>>;
  experiment_metrics?: Maybe<Array<Experiment_MetricsOutput>>;
  experiment_metricsByID?: Maybe<Array<Experiment_MetricsByIdOutput>>;
  imeter_config?: Maybe<Array<Imeter_ConfigOutput>>;
  imeter_configByID?: Maybe<Array<Imeter_ConfigByIdOutput>>;
  imeter_config_value?: Maybe<Array<Imeter_Config_ValueOutput>>;
  imeter_config_valueByID?: Maybe<Array<Imeter_Config_ValueByIdOutput>>;
  imeter_equipment?: Maybe<Array<Imeter_EquipmentOutput>>;
  imeter_equipmentByID?: Maybe<Array<Imeter_EquipmentByIdOutput>>;
  imeter_equipment_label?: Maybe<Array<Imeter_Equipment_LabelOutput>>;
  imeter_equipment_labelByID?: Maybe<Array<Imeter_Equipment_LabelByIdOutput>>;
  imeter_equipment_metric?: Maybe<Array<Imeter_Equipment_MetricOutput>>;
  imeter_equipment_metricByID?: Maybe<Array<Imeter_Equipment_MetricByIdOutput>>;
  imeter_equipment_metric_asset_data?: Maybe<Array<Imeter_Equipment_Metric_Asset_DataOutput>>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Array<Imeter_Equipment_Metric_Asset_DataByIdOutput>>;
  imeter_equipment_metric_vw?: Maybe<Array<Imeter_Equipment_Metric_VwOutput>>;
  imeter_equipment_metric_vwByID?: Maybe<Array<Imeter_Equipment_Metric_VwByIdOutput>>;
  imeter_equipment_well_test_period_vw?: Maybe<Array<Imeter_Equipment_Well_Test_Period_VwOutput>>;
  imeter_equipment_well_test_period_vwByID?: Maybe<Array<Imeter_Equipment_Well_Test_Period_VwByIdOutput>>;
  imeter_experiment_label_vw?: Maybe<Array<Imeter_Experiment_Label_VwOutput>>;
  imeter_experiment_label_vwByID?: Maybe<Array<Imeter_Experiment_Label_VwByIdOutput>>;
  imeter_experiment_status_count?: Maybe<Array<Imeter_Experiment_Status_CountOutput>>;
  imeter_experiment_status_countByID?: Maybe<Array<Imeter_Experiment_Status_CountByIdOutput>>;
  imeter_experiment_tags?: Maybe<Array<Imeter_Experiment_TagsOutput>>;
  imeter_experiment_tagsByID?: Maybe<Array<Imeter_Experiment_TagsByIdOutput>>;
  imeter_experiment_training_data_vw?: Maybe<Array<Imeter_Experiment_Training_Data_VwOutput>>;
  imeter_experiment_training_data_vwByID?: Maybe<Array<Imeter_Experiment_Training_Data_VwByIdOutput>>;
  imeter_facility?: Maybe<Array<Imeter_FacilityOutput>>;
  imeter_facilityByID?: Maybe<Array<Imeter_FacilityByIdOutput>>;
  imeter_facility_equation?: Maybe<Array<Imeter_Facility_EquationOutput>>;
  imeter_facility_equationByID?: Maybe<Array<Imeter_Facility_EquationByIdOutput>>;
  imeter_facility_equation_category?: Maybe<Array<Imeter_Facility_Equation_CategoryOutput>>;
  imeter_facility_equation_categoryByID?: Maybe<Array<Imeter_Facility_Equation_CategoryByIdOutput>>;
  imeter_facility_well?: Maybe<Array<Imeter_Facility_WellOutput>>;
  imeter_facility_wellByID?: Maybe<Array<Imeter_Facility_WellByIdOutput>>;
  imeter_facility_well_vw?: Maybe<Array<Imeter_Facility_Well_VwOutput>>;
  imeter_facility_well_vwByID?: Maybe<Array<Imeter_Facility_Well_VwByIdOutput>>;
  imeter_humility_rule?: Maybe<Array<Imeter_Humility_RuleOutput>>;
  imeter_humility_ruleByID?: Maybe<Array<Imeter_Humility_RuleByIdOutput>>;
  imeter_labels?: Maybe<Array<Imeter_LabelsOutput>>;
  imeter_labelsByID?: Maybe<Array<Imeter_LabelsByIdOutput>>;
  imeter_last_testing_period?: Maybe<Array<Imeter_Last_Testing_PeriodOutput>>;
  imeter_last_testing_periodByID?: Maybe<Array<Imeter_Last_Testing_PeriodByIdOutput>>;
  imeter_metric?: Maybe<Array<Imeter_MetricOutput>>;
  imeter_metricByID?: Maybe<Array<Imeter_MetricByIdOutput>>;
  imeter_model_details?: Maybe<Array<Imeter_Model_DetailsOutput>>;
  imeter_model_detailsByID?: Maybe<Array<Imeter_Model_DetailsByIdOutput>>;
  imeter_model_humility_rule?: Maybe<Array<Imeter_Model_Humility_RuleOutput>>;
  imeter_model_humility_ruleByID?: Maybe<Array<Imeter_Model_Humility_RuleByIdOutput>>;
  imeter_model_status_count?: Maybe<Array<Imeter_Model_Status_CountOutput>>;
  imeter_model_status_countByID?: Maybe<Array<Imeter_Model_Status_CountByIdOutput>>;
  imeter_models?: Maybe<Array<Imeter_ModelsOutput>>;
  imeter_modelsByID?: Maybe<Array<Imeter_ModelsByIdOutput>>;
  imeter_predicting_model_vw?: Maybe<Array<Imeter_Predicting_Model_VwOutput>>;
  imeter_predicting_model_vwByID?: Maybe<Array<Imeter_Predicting_Model_VwByIdOutput>>;
  imeter_validation_metric?: Maybe<Array<Imeter_Validation_MetricOutput>>;
  imeter_validation_metricByID?: Maybe<Array<Imeter_Validation_MetricByIdOutput>>;
  imeter_well?: Maybe<Array<Imeter_WellOutput>>;
  imeter_wellByID?: Maybe<Array<Imeter_WellByIdOutput>>;
  imeter_well_asset?: Maybe<Array<Imeter_Well_AssetOutput>>;
  imeter_well_assetByID?: Maybe<Array<Imeter_Well_AssetByIdOutput>>;
  imeter_well_config?: Maybe<Array<Imeter_Well_ConfigOutput>>;
  imeter_well_configByID?: Maybe<Array<Imeter_Well_ConfigByIdOutput>>;
  imeter_well_config_vw?: Maybe<Array<Imeter_Well_Config_VwOutput>>;
  imeter_well_config_vwByID?: Maybe<Array<Imeter_Well_Config_VwByIdOutput>>;
  imeter_well_equipment_assignment?: Maybe<Array<Imeter_Well_Equipment_AssignmentOutput>>;
  imeter_well_equipment_assignmentByID?: Maybe<Array<Imeter_Well_Equipment_AssignmentByIdOutput>>;
  imeter_well_humility_rule?: Maybe<Array<Imeter_Well_Humility_RuleOutput>>;
  imeter_well_humility_ruleByID?: Maybe<Array<Imeter_Well_Humility_RuleByIdOutput>>;
  imeter_well_humility_rule_vw?: Maybe<Array<Imeter_Well_Humility_Rule_VwOutput>>;
  imeter_well_humility_rule_vwByID?: Maybe<Array<Imeter_Well_Humility_Rule_VwByIdOutput>>;
  imeter_well_metric?: Maybe<Array<Imeter_Well_MetricOutput>>;
  imeter_well_metricByID?: Maybe<Array<Imeter_Well_MetricByIdOutput>>;
  imeter_well_metric_asset_data?: Maybe<Array<Imeter_Well_Metric_Asset_DataOutput>>;
  imeter_well_metric_asset_dataByID?: Maybe<Array<Imeter_Well_Metric_Asset_DataByIdOutput>>;
  imeter_well_metric_vw?: Maybe<Array<Imeter_Well_Metric_VwOutput>>;
  imeter_well_metric_vwByID?: Maybe<Array<Imeter_Well_Metric_VwByIdOutput>>;
  imeter_well_validation_metric?: Maybe<Array<Imeter_Well_Validation_MetricOutput>>;
  imeter_well_validation_metricByID?: Maybe<Array<Imeter_Well_Validation_MetricByIdOutput>>;
  label_group?: Maybe<Array<Label_GroupOutput>>;
  label_groupByID?: Maybe<Array<Label_GroupByIdOutput>>;
  label_item?: Maybe<Array<Label_ItemOutput>>;
  label_itemByID?: Maybe<Array<Label_ItemByIdOutput>>;
  label_reason?: Maybe<Array<Label_ReasonOutput>>;
  label_reasonByID?: Maybe<Array<Label_ReasonByIdOutput>>;
  model?: Maybe<Array<ModelOutput>>;
  modelByID?: Maybe<Array<ModelByIdOutput>>;
  model_validation?: Maybe<Array<Model_ValidationOutput>>;
  model_validationByID?: Maybe<Array<Model_ValidationByIdOutput>>;
  model_validation_details?: Maybe<Array<Model_Validation_DetailsOutput>>;
  model_validation_detailsByID?: Maybe<Array<Model_Validation_DetailsByIdOutput>>;
  project?: Maybe<Array<ProjectOutput>>;
  projectByID?: Maybe<Array<ProjectByIdOutput>>;
  users?: Maybe<Array<UsersOutput>>;
  usersByID?: Maybe<Array<UsersByIdOutput>>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdOutput>>;
};


export type MutationAssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<AssetInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<AssetOrderBy>;
  update?: InputMaybe<AssetInput>;
  upsert?: InputMaybe<AssetInput>;
  where?: InputMaybe<AssetExpression>;
};


export type MutationAssetByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<AssetByIdInput>>;
  update?: InputMaybe<AssetByIdInput>;
  upsert?: InputMaybe<AssetByIdInput>;
};


export type MutationAsset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Asset_DataInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Asset_DataInput>;
  upsert?: InputMaybe<Asset_DataInput>;
  where?: InputMaybe<Asset_DataExpression>;
};


export type MutationAsset_DataByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Asset_DataByIdInput>>;
  update?: InputMaybe<Asset_DataByIdInput>;
  upsert?: InputMaybe<Asset_DataByIdInput>;
};


export type MutationAsset_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Asset_LabelInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Asset_LabelInput>;
  upsert?: InputMaybe<Asset_LabelInput>;
  where?: InputMaybe<Asset_LabelExpression>;
};


export type MutationAsset_LabelByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Asset_LabelByIdInput>>;
  update?: InputMaybe<Asset_LabelByIdInput>;
  upsert?: InputMaybe<Asset_LabelByIdInput>;
};


export type MutationAsset_Validation_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Asset_Validation_Metric_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_Validation_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Asset_Validation_Metric_VwInput>;
  upsert?: InputMaybe<Asset_Validation_Metric_VwInput>;
  where?: InputMaybe<Asset_Validation_Metric_VwExpression>;
};


export type MutationAsset_Validation_Metric_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Asset_Validation_Metric_VwByIdInput>>;
  update?: InputMaybe<Asset_Validation_Metric_VwByIdInput>;
  upsert?: InputMaybe<Asset_Validation_Metric_VwByIdInput>;
};


export type MutationExperimentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<ExperimentInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ExperimentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<ExperimentInput>;
  upsert?: InputMaybe<ExperimentInput>;
  where?: InputMaybe<ExperimentExpression>;
};


export type MutationExperimentByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<ExperimentByIdInput>>;
  update?: InputMaybe<ExperimentByIdInput>;
  upsert?: InputMaybe<ExperimentByIdInput>;
};


export type MutationExperiment_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Experiment_AssetInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Experiment_AssetInput>;
  upsert?: InputMaybe<Experiment_AssetInput>;
  where?: InputMaybe<Experiment_AssetExpression>;
};


export type MutationExperiment_AssetByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Experiment_AssetByIdInput>>;
  update?: InputMaybe<Experiment_AssetByIdInput>;
  upsert?: InputMaybe<Experiment_AssetByIdInput>;
};


export type MutationExperiment_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Experiment_DataInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Experiment_DataInput>;
  upsert?: InputMaybe<Experiment_DataInput>;
  where?: InputMaybe<Experiment_DataExpression>;
};


export type MutationExperiment_DataByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Experiment_DataByIdInput>>;
  update?: InputMaybe<Experiment_DataByIdInput>;
  upsert?: InputMaybe<Experiment_DataByIdInput>;
};


export type MutationExperiment_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Experiment_LabelInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Experiment_LabelInput>;
  upsert?: InputMaybe<Experiment_LabelInput>;
  where?: InputMaybe<Experiment_LabelExpression>;
};


export type MutationExperiment_LabelByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Experiment_LabelByIdInput>>;
  update?: InputMaybe<Experiment_LabelByIdInput>;
  upsert?: InputMaybe<Experiment_LabelByIdInput>;
};


export type MutationExperiment_MetricsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Experiment_MetricsInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_MetricsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Experiment_MetricsInput>;
  upsert?: InputMaybe<Experiment_MetricsInput>;
  where?: InputMaybe<Experiment_MetricsExpression>;
};


export type MutationExperiment_MetricsByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Experiment_MetricsByIdInput>>;
  update?: InputMaybe<Experiment_MetricsByIdInput>;
  upsert?: InputMaybe<Experiment_MetricsByIdInput>;
};


export type MutationImeter_ConfigArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_ConfigInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_ConfigOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_ConfigInput>;
  upsert?: InputMaybe<Imeter_ConfigInput>;
  where?: InputMaybe<Imeter_ConfigExpression>;
};


export type MutationImeter_ConfigByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_ConfigByIdInput>>;
  update?: InputMaybe<Imeter_ConfigByIdInput>;
  upsert?: InputMaybe<Imeter_ConfigByIdInput>;
};


export type MutationImeter_Config_ValueArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Config_ValueInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Config_ValueOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Config_ValueInput>;
  upsert?: InputMaybe<Imeter_Config_ValueInput>;
  where?: InputMaybe<Imeter_Config_ValueExpression>;
};


export type MutationImeter_Config_ValueByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Config_ValueByIdInput>>;
  update?: InputMaybe<Imeter_Config_ValueByIdInput>;
  upsert?: InputMaybe<Imeter_Config_ValueByIdInput>;
};


export type MutationImeter_EquipmentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_EquipmentInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_EquipmentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_EquipmentInput>;
  upsert?: InputMaybe<Imeter_EquipmentInput>;
  where?: InputMaybe<Imeter_EquipmentExpression>;
};


export type MutationImeter_EquipmentByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_EquipmentByIdInput>>;
  update?: InputMaybe<Imeter_EquipmentByIdInput>;
  upsert?: InputMaybe<Imeter_EquipmentByIdInput>;
};


export type MutationImeter_Equipment_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_LabelInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Equipment_LabelInput>;
  upsert?: InputMaybe<Imeter_Equipment_LabelInput>;
  where?: InputMaybe<Imeter_Equipment_LabelExpression>;
};


export type MutationImeter_Equipment_LabelByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_LabelByIdInput>>;
  update?: InputMaybe<Imeter_Equipment_LabelByIdInput>;
  upsert?: InputMaybe<Imeter_Equipment_LabelByIdInput>;
};


export type MutationImeter_Equipment_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_MetricInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Equipment_MetricInput>;
  upsert?: InputMaybe<Imeter_Equipment_MetricInput>;
  where?: InputMaybe<Imeter_Equipment_MetricExpression>;
};


export type MutationImeter_Equipment_MetricByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_MetricByIdInput>>;
  update?: InputMaybe<Imeter_Equipment_MetricByIdInput>;
  upsert?: InputMaybe<Imeter_Equipment_MetricByIdInput>;
};


export type MutationImeter_Equipment_Metric_Asset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_Metric_Asset_DataInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Metric_Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Equipment_Metric_Asset_DataInput>;
  upsert?: InputMaybe<Imeter_Equipment_Metric_Asset_DataInput>;
  where?: InputMaybe<Imeter_Equipment_Metric_Asset_DataExpression>;
};


export type MutationImeter_Equipment_Metric_Asset_DataByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_Metric_Asset_DataByIdInput>>;
  update?: InputMaybe<Imeter_Equipment_Metric_Asset_DataByIdInput>;
  upsert?: InputMaybe<Imeter_Equipment_Metric_Asset_DataByIdInput>;
};


export type MutationImeter_Equipment_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_Metric_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Equipment_Metric_VwInput>;
  upsert?: InputMaybe<Imeter_Equipment_Metric_VwInput>;
  where?: InputMaybe<Imeter_Equipment_Metric_VwExpression>;
};


export type MutationImeter_Equipment_Metric_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Equipment_Metric_VwByIdInput>>;
  update?: InputMaybe<Imeter_Equipment_Metric_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Equipment_Metric_VwByIdInput>;
};


export type MutationImeter_Equipment_Well_Test_Period_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Equipment_Well_Test_Period_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwInput>;
  upsert?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwInput>;
  where?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwExpression>;
};


export type MutationImeter_Equipment_Well_Test_Period_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Equipment_Well_Test_Period_VwByIdInput>>;
  update?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwByIdInput>;
};


export type MutationImeter_Experiment_Label_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Experiment_Label_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Label_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Experiment_Label_VwInput>;
  upsert?: InputMaybe<Imeter_Experiment_Label_VwInput>;
  where?: InputMaybe<Imeter_Experiment_Label_VwExpression>;
};


export type MutationImeter_Experiment_Label_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Experiment_Label_VwByIdInput>>;
  update?: InputMaybe<Imeter_Experiment_Label_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Experiment_Label_VwByIdInput>;
};


export type MutationImeter_Experiment_Status_CountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Experiment_Status_CountInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Status_CountOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Experiment_Status_CountInput>;
  upsert?: InputMaybe<Imeter_Experiment_Status_CountInput>;
  where?: InputMaybe<Imeter_Experiment_Status_CountExpression>;
};


export type MutationImeter_Experiment_Status_CountByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Experiment_Status_CountByIdInput>>;
  update?: InputMaybe<Imeter_Experiment_Status_CountByIdInput>;
  upsert?: InputMaybe<Imeter_Experiment_Status_CountByIdInput>;
};


export type MutationImeter_Experiment_TagsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Experiment_TagsInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_TagsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Experiment_TagsInput>;
  upsert?: InputMaybe<Imeter_Experiment_TagsInput>;
  where?: InputMaybe<Imeter_Experiment_TagsExpression>;
};


export type MutationImeter_Experiment_TagsByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Experiment_TagsByIdInput>>;
  update?: InputMaybe<Imeter_Experiment_TagsByIdInput>;
  upsert?: InputMaybe<Imeter_Experiment_TagsByIdInput>;
};


export type MutationImeter_Experiment_Training_Data_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Experiment_Training_Data_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Training_Data_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Experiment_Training_Data_VwInput>;
  upsert?: InputMaybe<Imeter_Experiment_Training_Data_VwInput>;
  where?: InputMaybe<Imeter_Experiment_Training_Data_VwExpression>;
};


export type MutationImeter_Experiment_Training_Data_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Experiment_Training_Data_VwByIdInput>>;
  update?: InputMaybe<Imeter_Experiment_Training_Data_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Experiment_Training_Data_VwByIdInput>;
};


export type MutationImeter_FacilityArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_FacilityInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_FacilityOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_FacilityInput>;
  upsert?: InputMaybe<Imeter_FacilityInput>;
  where?: InputMaybe<Imeter_FacilityExpression>;
};


export type MutationImeter_FacilityByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_FacilityByIdInput>>;
  update?: InputMaybe<Imeter_FacilityByIdInput>;
  upsert?: InputMaybe<Imeter_FacilityByIdInput>;
};


export type MutationImeter_Facility_EquationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_EquationInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_EquationOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Facility_EquationInput>;
  upsert?: InputMaybe<Imeter_Facility_EquationInput>;
  where?: InputMaybe<Imeter_Facility_EquationExpression>;
};


export type MutationImeter_Facility_EquationByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_EquationByIdInput>>;
  update?: InputMaybe<Imeter_Facility_EquationByIdInput>;
  upsert?: InputMaybe<Imeter_Facility_EquationByIdInput>;
};


export type MutationImeter_Facility_Equation_CategoryArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_Equation_CategoryInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_Equation_CategoryOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Facility_Equation_CategoryInput>;
  upsert?: InputMaybe<Imeter_Facility_Equation_CategoryInput>;
  where?: InputMaybe<Imeter_Facility_Equation_CategoryExpression>;
};


export type MutationImeter_Facility_Equation_CategoryByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_Equation_CategoryByIdInput>>;
  update?: InputMaybe<Imeter_Facility_Equation_CategoryByIdInput>;
  upsert?: InputMaybe<Imeter_Facility_Equation_CategoryByIdInput>;
};


export type MutationImeter_Facility_WellArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_WellInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_WellOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Facility_WellInput>;
  upsert?: InputMaybe<Imeter_Facility_WellInput>;
  where?: InputMaybe<Imeter_Facility_WellExpression>;
};


export type MutationImeter_Facility_WellByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_WellByIdInput>>;
  update?: InputMaybe<Imeter_Facility_WellByIdInput>;
  upsert?: InputMaybe<Imeter_Facility_WellByIdInput>;
};


export type MutationImeter_Facility_Well_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Facility_Well_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_Well_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Facility_Well_VwInput>;
  upsert?: InputMaybe<Imeter_Facility_Well_VwInput>;
  where?: InputMaybe<Imeter_Facility_Well_VwExpression>;
};


export type MutationImeter_Facility_Well_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Facility_Well_VwByIdInput>>;
  update?: InputMaybe<Imeter_Facility_Well_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Facility_Well_VwByIdInput>;
};


export type MutationImeter_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Humility_RuleInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Humility_RuleInput>;
  upsert?: InputMaybe<Imeter_Humility_RuleInput>;
  where?: InputMaybe<Imeter_Humility_RuleExpression>;
};


export type MutationImeter_Humility_RuleByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Humility_RuleByIdInput>>;
  update?: InputMaybe<Imeter_Humility_RuleByIdInput>;
  upsert?: InputMaybe<Imeter_Humility_RuleByIdInput>;
};


export type MutationImeter_LabelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_LabelsInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_LabelsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_LabelsInput>;
  upsert?: InputMaybe<Imeter_LabelsInput>;
  where?: InputMaybe<Imeter_LabelsExpression>;
};


export type MutationImeter_LabelsByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_LabelsByIdInput>>;
  update?: InputMaybe<Imeter_LabelsByIdInput>;
  upsert?: InputMaybe<Imeter_LabelsByIdInput>;
};


export type MutationImeter_Last_Testing_PeriodArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Last_Testing_PeriodInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Last_Testing_PeriodOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Last_Testing_PeriodInput>;
  upsert?: InputMaybe<Imeter_Last_Testing_PeriodInput>;
  where?: InputMaybe<Imeter_Last_Testing_PeriodExpression>;
};


export type MutationImeter_Last_Testing_PeriodByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Last_Testing_PeriodByIdInput>>;
  update?: InputMaybe<Imeter_Last_Testing_PeriodByIdInput>;
  upsert?: InputMaybe<Imeter_Last_Testing_PeriodByIdInput>;
};


export type MutationImeter_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_MetricInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_MetricInput>;
  upsert?: InputMaybe<Imeter_MetricInput>;
  where?: InputMaybe<Imeter_MetricExpression>;
};


export type MutationImeter_MetricByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_MetricByIdInput>>;
  update?: InputMaybe<Imeter_MetricByIdInput>;
  upsert?: InputMaybe<Imeter_MetricByIdInput>;
};


export type MutationImeter_Model_DetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Model_DetailsInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_DetailsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Model_DetailsInput>;
  upsert?: InputMaybe<Imeter_Model_DetailsInput>;
  where?: InputMaybe<Imeter_Model_DetailsExpression>;
};


export type MutationImeter_Model_DetailsByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Model_DetailsByIdInput>>;
  update?: InputMaybe<Imeter_Model_DetailsByIdInput>;
  upsert?: InputMaybe<Imeter_Model_DetailsByIdInput>;
};


export type MutationImeter_Model_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Model_Humility_RuleInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Model_Humility_RuleInput>;
  upsert?: InputMaybe<Imeter_Model_Humility_RuleInput>;
  where?: InputMaybe<Imeter_Model_Humility_RuleExpression>;
};


export type MutationImeter_Model_Humility_RuleByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Model_Humility_RuleByIdInput>>;
  update?: InputMaybe<Imeter_Model_Humility_RuleByIdInput>;
  upsert?: InputMaybe<Imeter_Model_Humility_RuleByIdInput>;
};


export type MutationImeter_Model_Status_CountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Model_Status_CountInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_Status_CountOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Model_Status_CountInput>;
  upsert?: InputMaybe<Imeter_Model_Status_CountInput>;
  where?: InputMaybe<Imeter_Model_Status_CountExpression>;
};


export type MutationImeter_Model_Status_CountByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Model_Status_CountByIdInput>>;
  update?: InputMaybe<Imeter_Model_Status_CountByIdInput>;
  upsert?: InputMaybe<Imeter_Model_Status_CountByIdInput>;
};


export type MutationImeter_ModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_ModelsInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_ModelsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_ModelsInput>;
  upsert?: InputMaybe<Imeter_ModelsInput>;
  where?: InputMaybe<Imeter_ModelsExpression>;
};


export type MutationImeter_ModelsByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_ModelsByIdInput>>;
  update?: InputMaybe<Imeter_ModelsByIdInput>;
  upsert?: InputMaybe<Imeter_ModelsByIdInput>;
};


export type MutationImeter_Predicting_Model_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Predicting_Model_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Predicting_Model_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Predicting_Model_VwInput>;
  upsert?: InputMaybe<Imeter_Predicting_Model_VwInput>;
  where?: InputMaybe<Imeter_Predicting_Model_VwExpression>;
};


export type MutationImeter_Predicting_Model_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Predicting_Model_VwByIdInput>>;
  update?: InputMaybe<Imeter_Predicting_Model_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Predicting_Model_VwByIdInput>;
};


export type MutationImeter_Validation_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Validation_MetricInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Validation_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Validation_MetricInput>;
  upsert?: InputMaybe<Imeter_Validation_MetricInput>;
  where?: InputMaybe<Imeter_Validation_MetricExpression>;
};


export type MutationImeter_Validation_MetricByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Validation_MetricByIdInput>>;
  update?: InputMaybe<Imeter_Validation_MetricByIdInput>;
  upsert?: InputMaybe<Imeter_Validation_MetricByIdInput>;
};


export type MutationImeter_WellArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_WellInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_WellOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_WellInput>;
  upsert?: InputMaybe<Imeter_WellInput>;
  where?: InputMaybe<Imeter_WellExpression>;
};


export type MutationImeter_WellByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_WellByIdInput>>;
  update?: InputMaybe<Imeter_WellByIdInput>;
  upsert?: InputMaybe<Imeter_WellByIdInput>;
};


export type MutationImeter_Well_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_AssetInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_AssetInput>;
  upsert?: InputMaybe<Imeter_Well_AssetInput>;
  where?: InputMaybe<Imeter_Well_AssetExpression>;
};


export type MutationImeter_Well_AssetByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_AssetByIdInput>>;
  update?: InputMaybe<Imeter_Well_AssetByIdInput>;
  upsert?: InputMaybe<Imeter_Well_AssetByIdInput>;
};


export type MutationImeter_Well_ConfigArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_ConfigInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_ConfigOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_ConfigInput>;
  upsert?: InputMaybe<Imeter_Well_ConfigInput>;
  where?: InputMaybe<Imeter_Well_ConfigExpression>;
};


export type MutationImeter_Well_ConfigByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_ConfigByIdInput>>;
  update?: InputMaybe<Imeter_Well_ConfigByIdInput>;
  upsert?: InputMaybe<Imeter_Well_ConfigByIdInput>;
};


export type MutationImeter_Well_Config_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Config_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Config_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Config_VwInput>;
  upsert?: InputMaybe<Imeter_Well_Config_VwInput>;
  where?: InputMaybe<Imeter_Well_Config_VwExpression>;
};


export type MutationImeter_Well_Config_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Well_Config_VwByIdInput>>;
  update?: InputMaybe<Imeter_Well_Config_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Config_VwByIdInput>;
};


export type MutationImeter_Well_Equipment_AssignmentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Equipment_AssignmentInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Equipment_AssignmentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Equipment_AssignmentInput>;
  upsert?: InputMaybe<Imeter_Well_Equipment_AssignmentInput>;
  where?: InputMaybe<Imeter_Well_Equipment_AssignmentExpression>;
};


export type MutationImeter_Well_Equipment_AssignmentByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Equipment_AssignmentByIdInput>>;
  update?: InputMaybe<Imeter_Well_Equipment_AssignmentByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Equipment_AssignmentByIdInput>;
};


export type MutationImeter_Well_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Humility_RuleInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Humility_RuleInput>;
  upsert?: InputMaybe<Imeter_Well_Humility_RuleInput>;
  where?: InputMaybe<Imeter_Well_Humility_RuleExpression>;
};


export type MutationImeter_Well_Humility_RuleByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Humility_RuleByIdInput>>;
  update?: InputMaybe<Imeter_Well_Humility_RuleByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Humility_RuleByIdInput>;
};


export type MutationImeter_Well_Humility_Rule_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Humility_Rule_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Humility_Rule_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Humility_Rule_VwInput>;
  upsert?: InputMaybe<Imeter_Well_Humility_Rule_VwInput>;
  where?: InputMaybe<Imeter_Well_Humility_Rule_VwExpression>;
};


export type MutationImeter_Well_Humility_Rule_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Well_Humility_Rule_VwByIdInput>>;
  update?: InputMaybe<Imeter_Well_Humility_Rule_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Humility_Rule_VwByIdInput>;
};


export type MutationImeter_Well_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_MetricInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_MetricInput>;
  upsert?: InputMaybe<Imeter_Well_MetricInput>;
  where?: InputMaybe<Imeter_Well_MetricExpression>;
};


export type MutationImeter_Well_MetricByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_MetricByIdInput>>;
  update?: InputMaybe<Imeter_Well_MetricByIdInput>;
  upsert?: InputMaybe<Imeter_Well_MetricByIdInput>;
};


export type MutationImeter_Well_Metric_Asset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Metric_Asset_DataInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Metric_Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Metric_Asset_DataInput>;
  upsert?: InputMaybe<Imeter_Well_Metric_Asset_DataInput>;
  where?: InputMaybe<Imeter_Well_Metric_Asset_DataExpression>;
};


export type MutationImeter_Well_Metric_Asset_DataByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Metric_Asset_DataByIdInput>>;
  update?: InputMaybe<Imeter_Well_Metric_Asset_DataByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Metric_Asset_DataByIdInput>;
};


export type MutationImeter_Well_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Metric_VwInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Metric_VwInput>;
  upsert?: InputMaybe<Imeter_Well_Metric_VwInput>;
  where?: InputMaybe<Imeter_Well_Metric_VwExpression>;
};


export type MutationImeter_Well_Metric_VwByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Imeter_Well_Metric_VwByIdInput>>;
  update?: InputMaybe<Imeter_Well_Metric_VwByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Metric_VwByIdInput>;
};


export type MutationImeter_Well_Validation_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Validation_MetricInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Validation_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Imeter_Well_Validation_MetricInput>;
  upsert?: InputMaybe<Imeter_Well_Validation_MetricInput>;
  where?: InputMaybe<Imeter_Well_Validation_MetricExpression>;
};


export type MutationImeter_Well_Validation_MetricByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Imeter_Well_Validation_MetricByIdInput>>;
  update?: InputMaybe<Imeter_Well_Validation_MetricByIdInput>;
  upsert?: InputMaybe<Imeter_Well_Validation_MetricByIdInput>;
};


export type MutationLabel_GroupArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Label_GroupInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_GroupOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Label_GroupInput>;
  upsert?: InputMaybe<Label_GroupInput>;
  where?: InputMaybe<Label_GroupExpression>;
};


export type MutationLabel_GroupByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Label_GroupByIdInput>>;
  update?: InputMaybe<Label_GroupByIdInput>;
  upsert?: InputMaybe<Label_GroupByIdInput>;
};


export type MutationLabel_ItemArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Label_ItemInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_ItemOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Label_ItemInput>;
  upsert?: InputMaybe<Label_ItemInput>;
  where?: InputMaybe<Label_ItemExpression>;
};


export type MutationLabel_ItemByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Label_ItemByIdInput>>;
  update?: InputMaybe<Label_ItemByIdInput>;
  upsert?: InputMaybe<Label_ItemByIdInput>;
};


export type MutationLabel_ReasonArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Label_ReasonInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_ReasonOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Label_ReasonInput>;
  upsert?: InputMaybe<Label_ReasonInput>;
  where?: InputMaybe<Label_ReasonExpression>;
};


export type MutationLabel_ReasonByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Label_ReasonByIdInput>>;
  update?: InputMaybe<Label_ReasonByIdInput>;
  upsert?: InputMaybe<Label_ReasonByIdInput>;
};


export type MutationModelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<ModelInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ModelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<ModelInput>;
  upsert?: InputMaybe<ModelInput>;
  where?: InputMaybe<ModelExpression>;
};


export type MutationModelByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<ModelByIdInput>>;
  update?: InputMaybe<ModelByIdInput>;
  upsert?: InputMaybe<ModelByIdInput>;
};


export type MutationModel_ValidationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Model_ValidationInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Model_ValidationOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Model_ValidationInput>;
  upsert?: InputMaybe<Model_ValidationInput>;
  where?: InputMaybe<Model_ValidationExpression>;
};


export type MutationModel_ValidationByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Model_ValidationByIdInput>>;
  update?: InputMaybe<Model_ValidationByIdInput>;
  upsert?: InputMaybe<Model_ValidationByIdInput>;
};


export type MutationModel_Validation_DetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Model_Validation_DetailsInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Model_Validation_DetailsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Model_Validation_DetailsInput>;
  upsert?: InputMaybe<Model_Validation_DetailsInput>;
  where?: InputMaybe<Model_Validation_DetailsExpression>;
};


export type MutationModel_Validation_DetailsByIdArgs = {
  delete: Scalars['Boolean']['input'];
  insert?: InputMaybe<Array<Model_Validation_DetailsByIdInput>>;
  update?: InputMaybe<Model_Validation_DetailsByIdInput>;
  upsert?: InputMaybe<Model_Validation_DetailsByIdInput>;
};


export type MutationProjectArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<ProjectInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ProjectOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<ProjectInput>;
  upsert?: InputMaybe<ProjectInput>;
  where?: InputMaybe<ProjectExpression>;
};


export type MutationProjectByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<ProjectByIdInput>>;
  update?: InputMaybe<ProjectByIdInput>;
  upsert?: InputMaybe<ProjectByIdInput>;
};


export type MutationUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<UsersInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<UsersOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<UsersInput>;
  upsert?: InputMaybe<UsersInput>;
  where?: InputMaybe<UsersExpression>;
};


export type MutationUsersByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<UsersByIdInput>>;
  update?: InputMaybe<UsersByIdInput>;
  upsert?: InputMaybe<UsersByIdInput>;
};


export type MutationZ_Obs_Imeter_Equipment_Metric_Asset_Data_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  delete: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  insert?: InputMaybe<Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetInput>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  update?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetInput>;
  upsert?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetInput>;
  where?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression>;
};


export type MutationZ_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdArgs = {
  delete: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  insert?: InputMaybe<Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdInput>>;
  update?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdInput>;
  upsert?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdInput>;
};

export enum OrderDirection {
  /** Ascending */
  Asc = 'asc',
  /** Descending */
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Array<AssetOutput>>;
  assetByID?: Maybe<AssetByIdOutput>;
  asset_data?: Maybe<Array<Asset_DataOutput>>;
  asset_dataByID?: Maybe<Asset_DataByIdOutput>;
  asset_label?: Maybe<Array<Asset_LabelOutput>>;
  asset_labelByID?: Maybe<Asset_LabelByIdOutput>;
  asset_validation_metric_vw?: Maybe<Array<Asset_Validation_Metric_VwOutput>>;
  asset_validation_metric_vwByID?: Maybe<Asset_Validation_Metric_VwByIdOutput>;
  experiment?: Maybe<Array<ExperimentOutput>>;
  experimentByID?: Maybe<ExperimentByIdOutput>;
  experiment_asset?: Maybe<Array<Experiment_AssetOutput>>;
  experiment_assetByID?: Maybe<Experiment_AssetByIdOutput>;
  experiment_data?: Maybe<Array<Experiment_DataOutput>>;
  experiment_dataByID?: Maybe<Experiment_DataByIdOutput>;
  experiment_label?: Maybe<Array<Experiment_LabelOutput>>;
  experiment_labelByID?: Maybe<Experiment_LabelByIdOutput>;
  experiment_metrics?: Maybe<Array<Experiment_MetricsOutput>>;
  experiment_metricsByID?: Maybe<Experiment_MetricsByIdOutput>;
  imeter_config?: Maybe<Array<Imeter_ConfigOutput>>;
  imeter_configByID?: Maybe<Imeter_ConfigByIdOutput>;
  imeter_config_value?: Maybe<Array<Imeter_Config_ValueOutput>>;
  imeter_config_valueByID?: Maybe<Imeter_Config_ValueByIdOutput>;
  imeter_equipment?: Maybe<Array<Imeter_EquipmentOutput>>;
  imeter_equipmentByID?: Maybe<Imeter_EquipmentByIdOutput>;
  imeter_equipment_label?: Maybe<Array<Imeter_Equipment_LabelOutput>>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelByIdOutput>;
  imeter_equipment_metric?: Maybe<Array<Imeter_Equipment_MetricOutput>>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricByIdOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Array<Imeter_Equipment_Metric_Asset_DataOutput>>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataByIdOutput>;
  imeter_equipment_metric_vw?: Maybe<Array<Imeter_Equipment_Metric_VwOutput>>;
  imeter_equipment_metric_vwByID?: Maybe<Imeter_Equipment_Metric_VwByIdOutput>;
  imeter_equipment_well_test_period_vw?: Maybe<Array<Imeter_Equipment_Well_Test_Period_VwOutput>>;
  imeter_equipment_well_test_period_vwByID?: Maybe<Imeter_Equipment_Well_Test_Period_VwByIdOutput>;
  imeter_experiment_label_vw?: Maybe<Array<Imeter_Experiment_Label_VwOutput>>;
  imeter_experiment_label_vwByID?: Maybe<Imeter_Experiment_Label_VwByIdOutput>;
  imeter_experiment_status_count?: Maybe<Array<Imeter_Experiment_Status_CountOutput>>;
  imeter_experiment_status_countByID?: Maybe<Imeter_Experiment_Status_CountByIdOutput>;
  imeter_experiment_tags?: Maybe<Array<Imeter_Experiment_TagsOutput>>;
  imeter_experiment_tagsByID?: Maybe<Imeter_Experiment_TagsByIdOutput>;
  imeter_experiment_training_data_vw?: Maybe<Array<Imeter_Experiment_Training_Data_VwOutput>>;
  imeter_experiment_training_data_vwByID?: Maybe<Imeter_Experiment_Training_Data_VwByIdOutput>;
  imeter_facility?: Maybe<Array<Imeter_FacilityOutput>>;
  imeter_facilityByID?: Maybe<Imeter_FacilityByIdOutput>;
  imeter_facility_equation?: Maybe<Array<Imeter_Facility_EquationOutput>>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationByIdOutput>;
  imeter_facility_equation_category?: Maybe<Array<Imeter_Facility_Equation_CategoryOutput>>;
  imeter_facility_equation_categoryByID?: Maybe<Imeter_Facility_Equation_CategoryByIdOutput>;
  imeter_facility_well?: Maybe<Array<Imeter_Facility_WellOutput>>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellByIdOutput>;
  imeter_facility_well_vw?: Maybe<Array<Imeter_Facility_Well_VwOutput>>;
  imeter_facility_well_vwByID?: Maybe<Imeter_Facility_Well_VwByIdOutput>;
  imeter_humility_rule?: Maybe<Array<Imeter_Humility_RuleOutput>>;
  imeter_humility_ruleByID?: Maybe<Imeter_Humility_RuleByIdOutput>;
  imeter_labels?: Maybe<Array<Imeter_LabelsOutput>>;
  imeter_labelsByID?: Maybe<Imeter_LabelsByIdOutput>;
  imeter_last_testing_period?: Maybe<Array<Imeter_Last_Testing_PeriodOutput>>;
  imeter_last_testing_periodByID?: Maybe<Imeter_Last_Testing_PeriodByIdOutput>;
  imeter_metric?: Maybe<Array<Imeter_MetricOutput>>;
  imeter_metricByID?: Maybe<Imeter_MetricByIdOutput>;
  imeter_model_details?: Maybe<Array<Imeter_Model_DetailsOutput>>;
  imeter_model_detailsByID?: Maybe<Imeter_Model_DetailsByIdOutput>;
  imeter_model_humility_rule?: Maybe<Array<Imeter_Model_Humility_RuleOutput>>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleByIdOutput>;
  imeter_model_status_count?: Maybe<Array<Imeter_Model_Status_CountOutput>>;
  imeter_model_status_countByID?: Maybe<Imeter_Model_Status_CountByIdOutput>;
  imeter_models?: Maybe<Array<Imeter_ModelsOutput>>;
  imeter_modelsByID?: Maybe<Imeter_ModelsByIdOutput>;
  imeter_predicting_model_vw?: Maybe<Array<Imeter_Predicting_Model_VwOutput>>;
  imeter_predicting_model_vwByID?: Maybe<Imeter_Predicting_Model_VwByIdOutput>;
  imeter_validation_metric?: Maybe<Array<Imeter_Validation_MetricOutput>>;
  imeter_validation_metricByID?: Maybe<Imeter_Validation_MetricByIdOutput>;
  imeter_well?: Maybe<Array<Imeter_WellOutput>>;
  imeter_wellByID?: Maybe<Imeter_WellByIdOutput>;
  imeter_well_asset?: Maybe<Array<Imeter_Well_AssetOutput>>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetByIdOutput>;
  imeter_well_config?: Maybe<Array<Imeter_Well_ConfigOutput>>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigByIdOutput>;
  imeter_well_config_vw?: Maybe<Array<Imeter_Well_Config_VwOutput>>;
  imeter_well_config_vwByID?: Maybe<Imeter_Well_Config_VwByIdOutput>;
  imeter_well_equipment_assignment?: Maybe<Array<Imeter_Well_Equipment_AssignmentOutput>>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentByIdOutput>;
  imeter_well_humility_rule?: Maybe<Array<Imeter_Well_Humility_RuleOutput>>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleByIdOutput>;
  imeter_well_humility_rule_vw?: Maybe<Array<Imeter_Well_Humility_Rule_VwOutput>>;
  imeter_well_humility_rule_vwByID?: Maybe<Imeter_Well_Humility_Rule_VwByIdOutput>;
  imeter_well_metric?: Maybe<Array<Imeter_Well_MetricOutput>>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricByIdOutput>;
  imeter_well_metric_asset_data?: Maybe<Array<Imeter_Well_Metric_Asset_DataOutput>>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataByIdOutput>;
  imeter_well_metric_vw?: Maybe<Array<Imeter_Well_Metric_VwOutput>>;
  imeter_well_metric_vwByID?: Maybe<Imeter_Well_Metric_VwByIdOutput>;
  imeter_well_validation_metric?: Maybe<Array<Imeter_Well_Validation_MetricOutput>>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricByIdOutput>;
  label_group?: Maybe<Array<Label_GroupOutput>>;
  label_groupByID?: Maybe<Label_GroupByIdOutput>;
  label_item?: Maybe<Array<Label_ItemOutput>>;
  label_itemByID?: Maybe<Label_ItemByIdOutput>;
  label_reason?: Maybe<Array<Label_ReasonOutput>>;
  label_reasonByID?: Maybe<Label_ReasonByIdOutput>;
  model?: Maybe<Array<ModelOutput>>;
  modelByID?: Maybe<ModelByIdOutput>;
  model_validation?: Maybe<Array<Model_ValidationOutput>>;
  model_validationByID?: Maybe<Model_ValidationByIdOutput>;
  model_validation_details?: Maybe<Array<Model_Validation_DetailsOutput>>;
  model_validation_detailsByID?: Maybe<Model_Validation_DetailsByIdOutput>;
  project?: Maybe<Array<ProjectOutput>>;
  projectByID?: Maybe<ProjectByIdOutput>;
  users?: Maybe<Array<UsersOutput>>;
  usersByID?: Maybe<UsersByIdOutput>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdOutput>;
};


export type QueryAssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<AssetOrderBy>;
  where?: InputMaybe<AssetExpression>;
};


export type QueryAssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAsset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Asset_DataExpression>;
};


export type QueryAsset_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAsset_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Asset_LabelExpression>;
};


export type QueryAsset_LabelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAsset_Validation_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_Validation_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Asset_Validation_Metric_VwExpression>;
};


export type QueryExperimentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ExperimentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ExperimentExpression>;
};


export type QueryExperimentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryExperiment_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_AssetExpression>;
};


export type QueryExperiment_AssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryExperiment_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_DataExpression>;
};


export type QueryExperiment_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryExperiment_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_LabelExpression>;
};


export type QueryExperiment_LabelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryExperiment_MetricsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_MetricsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_MetricsExpression>;
};


export type QueryExperiment_MetricsByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_ConfigArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_ConfigOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_ConfigExpression>;
};


export type QueryImeter_ConfigByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Config_ValueArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Config_ValueOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Config_ValueExpression>;
};


export type QueryImeter_Config_ValueByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_EquipmentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_EquipmentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_EquipmentExpression>;
};


export type QueryImeter_EquipmentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Equipment_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_LabelExpression>;
};


export type QueryImeter_Equipment_LabelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Equipment_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_MetricExpression>;
};


export type QueryImeter_Equipment_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Equipment_Metric_Asset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Metric_Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_Metric_Asset_DataExpression>;
};


export type QueryImeter_Equipment_Metric_Asset_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Equipment_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_Metric_VwExpression>;
};


export type QueryImeter_Equipment_Well_Test_Period_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwExpression>;
};


export type QueryImeter_Experiment_Label_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Label_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_Label_VwExpression>;
};


export type QueryImeter_Experiment_Status_CountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Status_CountOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_Status_CountExpression>;
};


export type QueryImeter_Experiment_TagsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_TagsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_TagsExpression>;
};


export type QueryImeter_Experiment_Training_Data_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Training_Data_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_Training_Data_VwExpression>;
};


export type QueryImeter_FacilityArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_FacilityOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_FacilityExpression>;
};


export type QueryImeter_FacilityByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Facility_EquationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_EquationOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_EquationExpression>;
};


export type QueryImeter_Facility_EquationByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Facility_Equation_CategoryArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_Equation_CategoryOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_Equation_CategoryExpression>;
};


export type QueryImeter_Facility_Equation_CategoryByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Facility_WellArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_WellOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_WellExpression>;
};


export type QueryImeter_Facility_WellByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Facility_Well_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_Well_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_Well_VwExpression>;
};


export type QueryImeter_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Humility_RuleExpression>;
};


export type QueryImeter_Humility_RuleByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_LabelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_LabelsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_LabelsExpression>;
};


export type QueryImeter_Last_Testing_PeriodArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Last_Testing_PeriodOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Last_Testing_PeriodExpression>;
};


export type QueryImeter_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_MetricExpression>;
};


export type QueryImeter_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Model_DetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_DetailsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Model_DetailsExpression>;
};


export type QueryImeter_Model_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Model_Humility_RuleExpression>;
};


export type QueryImeter_Model_Humility_RuleByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Model_Status_CountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_Status_CountOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Model_Status_CountExpression>;
};


export type QueryImeter_ModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_ModelsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_ModelsExpression>;
};


export type QueryImeter_Predicting_Model_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Predicting_Model_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Predicting_Model_VwExpression>;
};


export type QueryImeter_Validation_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Validation_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Validation_MetricExpression>;
};


export type QueryImeter_Validation_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_WellArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_WellOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_WellExpression>;
};


export type QueryImeter_WellByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_AssetExpression>;
};


export type QueryImeter_Well_AssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_ConfigArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_ConfigOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_ConfigExpression>;
};


export type QueryImeter_Well_ConfigByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_Config_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Config_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Config_VwExpression>;
};


export type QueryImeter_Well_Equipment_AssignmentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Equipment_AssignmentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Equipment_AssignmentExpression>;
};


export type QueryImeter_Well_Equipment_AssignmentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Humility_RuleExpression>;
};


export type QueryImeter_Well_Humility_RuleByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_Humility_Rule_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Humility_Rule_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Humility_Rule_VwExpression>;
};


export type QueryImeter_Well_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_MetricExpression>;
};


export type QueryImeter_Well_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_Metric_Asset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Metric_Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Metric_Asset_DataExpression>;
};


export type QueryImeter_Well_Metric_Asset_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImeter_Well_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Metric_VwExpression>;
};


export type QueryImeter_Well_Validation_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Validation_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Validation_MetricExpression>;
};


export type QueryImeter_Well_Validation_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLabel_GroupArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_GroupOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Label_GroupExpression>;
};


export type QueryLabel_GroupByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLabel_ItemArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_ItemOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Label_ItemExpression>;
};


export type QueryLabel_ItemByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLabel_ReasonArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_ReasonOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Label_ReasonExpression>;
};


export type QueryLabel_ReasonByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ModelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ModelExpression>;
};


export type QueryModelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModel_ValidationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Model_ValidationOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Model_ValidationExpression>;
};


export type QueryModel_ValidationByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModel_Validation_DetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Model_Validation_DetailsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Model_Validation_DetailsExpression>;
};


export type QueryProjectArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ProjectOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectExpression>;
};


export type QueryProjectByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<UsersOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UsersExpression>;
};


export type QueryUsersByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryZ_Obs_Imeter_Equipment_Metric_Asset_Data_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression>;
};


export type QueryZ_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringExpression = {
  /** JSON value contains all of they key/value pairs */
  contained_in?: InputMaybe<Scalars['String']['input']>;
  /** JSON value matches any of they key/value pairs */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Equals value */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals value */
  equals?: InputMaybe<Scalars['String']['input']>;
  /** Is greater than or equals value */
  greater_or_equals?: InputMaybe<Scalars['String']['input']>;
  /** Is greater than value */
  greater_than?: InputMaybe<Scalars['String']['input']>;
  /** Is greater than value */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Is greater than or equals value */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** JSON value contains this key */
  has_key?: InputMaybe<Scalars['String']['input']>;
  /** JSON value contains all of these keys */
  has_key_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** JSON value contains any of these keys */
  has_key_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Value matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is in list of values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Value matches (case-insensitive) regex pattern */
  iregex?: InputMaybe<Scalars['String']['input']>;
  /** Is value null (true) or not null (false) */
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is lesser than or equals value */
  lesser_or_equals?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than value */
  lesser_than?: InputMaybe<Scalars['String']['input']>;
  /** Value matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values having 'r' in second position */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than value */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Is lesser than or equals value */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Does not equal value */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  niregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  nlike?: InputMaybe<Scalars['String']['input']>;
  /** Does not equal value */
  not_equals?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching (case-insensitive) pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_ilike?: InputMaybe<Scalars['String']['input']>;
  /** Is not in list of values */
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Value not matching (case-insensitive) regex pattern */
  not_iregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching pattern where '%' represents zero or more characters and '_' represents a single character. Eg. '_r%' finds values not having 'r' in second position */
  not_like?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  not_regex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  not_similar?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern */
  nregex?: InputMaybe<Scalars['String']['input']>;
  /** Value not matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must not match entire value. */
  nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** Value matches regex pattern */
  regex?: InputMaybe<Scalars['String']['input']>;
  /** Value matching regex pattern. Similar to the 'like' operator but with support for regex. Pattern must match entire value. */
  similar?: InputMaybe<Scalars['String']['input']>;
};

export type Subscribe = {
  __typename?: 'Subscribe';
  asset?: Maybe<Array<AssetOutput>>;
  assetByID?: Maybe<AssetByIdOutput>;
  asset_data?: Maybe<Array<Asset_DataOutput>>;
  asset_dataByID?: Maybe<Asset_DataByIdOutput>;
  asset_label?: Maybe<Array<Asset_LabelOutput>>;
  asset_labelByID?: Maybe<Asset_LabelByIdOutput>;
  asset_validation_metric_vw?: Maybe<Array<Asset_Validation_Metric_VwOutput>>;
  asset_validation_metric_vwByID?: Maybe<Asset_Validation_Metric_VwByIdOutput>;
  experiment?: Maybe<Array<ExperimentOutput>>;
  experimentByID?: Maybe<ExperimentByIdOutput>;
  experiment_asset?: Maybe<Array<Experiment_AssetOutput>>;
  experiment_assetByID?: Maybe<Experiment_AssetByIdOutput>;
  experiment_data?: Maybe<Array<Experiment_DataOutput>>;
  experiment_dataByID?: Maybe<Experiment_DataByIdOutput>;
  experiment_label?: Maybe<Array<Experiment_LabelOutput>>;
  experiment_labelByID?: Maybe<Experiment_LabelByIdOutput>;
  experiment_metrics?: Maybe<Array<Experiment_MetricsOutput>>;
  experiment_metricsByID?: Maybe<Experiment_MetricsByIdOutput>;
  imeter_config?: Maybe<Array<Imeter_ConfigOutput>>;
  imeter_configByID?: Maybe<Imeter_ConfigByIdOutput>;
  imeter_config_value?: Maybe<Array<Imeter_Config_ValueOutput>>;
  imeter_config_valueByID?: Maybe<Imeter_Config_ValueByIdOutput>;
  imeter_equipment?: Maybe<Array<Imeter_EquipmentOutput>>;
  imeter_equipmentByID?: Maybe<Imeter_EquipmentByIdOutput>;
  imeter_equipment_label?: Maybe<Array<Imeter_Equipment_LabelOutput>>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelByIdOutput>;
  imeter_equipment_metric?: Maybe<Array<Imeter_Equipment_MetricOutput>>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricByIdOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Array<Imeter_Equipment_Metric_Asset_DataOutput>>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataByIdOutput>;
  imeter_equipment_metric_vw?: Maybe<Array<Imeter_Equipment_Metric_VwOutput>>;
  imeter_equipment_metric_vwByID?: Maybe<Imeter_Equipment_Metric_VwByIdOutput>;
  imeter_equipment_well_test_period_vw?: Maybe<Array<Imeter_Equipment_Well_Test_Period_VwOutput>>;
  imeter_equipment_well_test_period_vwByID?: Maybe<Imeter_Equipment_Well_Test_Period_VwByIdOutput>;
  imeter_experiment_label_vw?: Maybe<Array<Imeter_Experiment_Label_VwOutput>>;
  imeter_experiment_label_vwByID?: Maybe<Imeter_Experiment_Label_VwByIdOutput>;
  imeter_experiment_status_count?: Maybe<Array<Imeter_Experiment_Status_CountOutput>>;
  imeter_experiment_status_countByID?: Maybe<Imeter_Experiment_Status_CountByIdOutput>;
  imeter_experiment_tags?: Maybe<Array<Imeter_Experiment_TagsOutput>>;
  imeter_experiment_tagsByID?: Maybe<Imeter_Experiment_TagsByIdOutput>;
  imeter_experiment_training_data_vw?: Maybe<Array<Imeter_Experiment_Training_Data_VwOutput>>;
  imeter_experiment_training_data_vwByID?: Maybe<Imeter_Experiment_Training_Data_VwByIdOutput>;
  imeter_facility?: Maybe<Array<Imeter_FacilityOutput>>;
  imeter_facilityByID?: Maybe<Imeter_FacilityByIdOutput>;
  imeter_facility_equation?: Maybe<Array<Imeter_Facility_EquationOutput>>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationByIdOutput>;
  imeter_facility_equation_category?: Maybe<Array<Imeter_Facility_Equation_CategoryOutput>>;
  imeter_facility_equation_categoryByID?: Maybe<Imeter_Facility_Equation_CategoryByIdOutput>;
  imeter_facility_well?: Maybe<Array<Imeter_Facility_WellOutput>>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellByIdOutput>;
  imeter_facility_well_vw?: Maybe<Array<Imeter_Facility_Well_VwOutput>>;
  imeter_facility_well_vwByID?: Maybe<Imeter_Facility_Well_VwByIdOutput>;
  imeter_humility_rule?: Maybe<Array<Imeter_Humility_RuleOutput>>;
  imeter_humility_ruleByID?: Maybe<Imeter_Humility_RuleByIdOutput>;
  imeter_labels?: Maybe<Array<Imeter_LabelsOutput>>;
  imeter_labelsByID?: Maybe<Imeter_LabelsByIdOutput>;
  imeter_last_testing_period?: Maybe<Array<Imeter_Last_Testing_PeriodOutput>>;
  imeter_last_testing_periodByID?: Maybe<Imeter_Last_Testing_PeriodByIdOutput>;
  imeter_metric?: Maybe<Array<Imeter_MetricOutput>>;
  imeter_metricByID?: Maybe<Imeter_MetricByIdOutput>;
  imeter_model_details?: Maybe<Array<Imeter_Model_DetailsOutput>>;
  imeter_model_detailsByID?: Maybe<Imeter_Model_DetailsByIdOutput>;
  imeter_model_humility_rule?: Maybe<Array<Imeter_Model_Humility_RuleOutput>>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleByIdOutput>;
  imeter_model_status_count?: Maybe<Array<Imeter_Model_Status_CountOutput>>;
  imeter_model_status_countByID?: Maybe<Imeter_Model_Status_CountByIdOutput>;
  imeter_models?: Maybe<Array<Imeter_ModelsOutput>>;
  imeter_modelsByID?: Maybe<Imeter_ModelsByIdOutput>;
  imeter_predicting_model_vw?: Maybe<Array<Imeter_Predicting_Model_VwOutput>>;
  imeter_predicting_model_vwByID?: Maybe<Imeter_Predicting_Model_VwByIdOutput>;
  imeter_validation_metric?: Maybe<Array<Imeter_Validation_MetricOutput>>;
  imeter_validation_metricByID?: Maybe<Imeter_Validation_MetricByIdOutput>;
  imeter_well?: Maybe<Array<Imeter_WellOutput>>;
  imeter_wellByID?: Maybe<Imeter_WellByIdOutput>;
  imeter_well_asset?: Maybe<Array<Imeter_Well_AssetOutput>>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetByIdOutput>;
  imeter_well_config?: Maybe<Array<Imeter_Well_ConfigOutput>>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigByIdOutput>;
  imeter_well_config_vw?: Maybe<Array<Imeter_Well_Config_VwOutput>>;
  imeter_well_config_vwByID?: Maybe<Imeter_Well_Config_VwByIdOutput>;
  imeter_well_equipment_assignment?: Maybe<Array<Imeter_Well_Equipment_AssignmentOutput>>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentByIdOutput>;
  imeter_well_humility_rule?: Maybe<Array<Imeter_Well_Humility_RuleOutput>>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleByIdOutput>;
  imeter_well_humility_rule_vw?: Maybe<Array<Imeter_Well_Humility_Rule_VwOutput>>;
  imeter_well_humility_rule_vwByID?: Maybe<Imeter_Well_Humility_Rule_VwByIdOutput>;
  imeter_well_metric?: Maybe<Array<Imeter_Well_MetricOutput>>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricByIdOutput>;
  imeter_well_metric_asset_data?: Maybe<Array<Imeter_Well_Metric_Asset_DataOutput>>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataByIdOutput>;
  imeter_well_metric_vw?: Maybe<Array<Imeter_Well_Metric_VwOutput>>;
  imeter_well_metric_vwByID?: Maybe<Imeter_Well_Metric_VwByIdOutput>;
  imeter_well_validation_metric?: Maybe<Array<Imeter_Well_Validation_MetricOutput>>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricByIdOutput>;
  label_group?: Maybe<Array<Label_GroupOutput>>;
  label_groupByID?: Maybe<Label_GroupByIdOutput>;
  label_item?: Maybe<Array<Label_ItemOutput>>;
  label_itemByID?: Maybe<Label_ItemByIdOutput>;
  label_reason?: Maybe<Array<Label_ReasonOutput>>;
  label_reasonByID?: Maybe<Label_ReasonByIdOutput>;
  model?: Maybe<Array<ModelOutput>>;
  modelByID?: Maybe<ModelByIdOutput>;
  model_validation?: Maybe<Array<Model_ValidationOutput>>;
  model_validationByID?: Maybe<Model_ValidationByIdOutput>;
  model_validation_details?: Maybe<Array<Model_Validation_DetailsOutput>>;
  model_validation_detailsByID?: Maybe<Model_Validation_DetailsByIdOutput>;
  project?: Maybe<Array<ProjectOutput>>;
  projectByID?: Maybe<ProjectByIdOutput>;
  users?: Maybe<Array<UsersOutput>>;
  usersByID?: Maybe<UsersByIdOutput>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdOutput>;
};


export type SubscribeAssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<AssetOrderBy>;
  where?: InputMaybe<AssetExpression>;
};


export type SubscribeAssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeAsset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Asset_DataExpression>;
};


export type SubscribeAsset_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeAsset_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Asset_LabelExpression>;
};


export type SubscribeAsset_LabelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeAsset_Validation_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Asset_Validation_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Asset_Validation_Metric_VwExpression>;
};


export type SubscribeExperimentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ExperimentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ExperimentExpression>;
};


export type SubscribeExperimentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeExperiment_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_AssetExpression>;
};


export type SubscribeExperiment_AssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeExperiment_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_DataExpression>;
};


export type SubscribeExperiment_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeExperiment_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_LabelExpression>;
};


export type SubscribeExperiment_LabelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeExperiment_MetricsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Experiment_MetricsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experiment_MetricsExpression>;
};


export type SubscribeExperiment_MetricsByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_ConfigArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_ConfigOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_ConfigExpression>;
};


export type SubscribeImeter_ConfigByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Config_ValueArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Config_ValueOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Config_ValueExpression>;
};


export type SubscribeImeter_Config_ValueByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_EquipmentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_EquipmentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_EquipmentExpression>;
};


export type SubscribeImeter_EquipmentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Equipment_LabelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_LabelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_LabelExpression>;
};


export type SubscribeImeter_Equipment_LabelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Equipment_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_MetricExpression>;
};


export type SubscribeImeter_Equipment_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Equipment_Metric_Asset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Metric_Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_Metric_Asset_DataExpression>;
};


export type SubscribeImeter_Equipment_Metric_Asset_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Equipment_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_Metric_VwExpression>;
};


export type SubscribeImeter_Equipment_Well_Test_Period_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwExpression>;
};


export type SubscribeImeter_Experiment_Label_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Label_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_Label_VwExpression>;
};


export type SubscribeImeter_Experiment_Status_CountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Status_CountOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_Status_CountExpression>;
};


export type SubscribeImeter_Experiment_TagsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_TagsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_TagsExpression>;
};


export type SubscribeImeter_Experiment_Training_Data_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Experiment_Training_Data_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Experiment_Training_Data_VwExpression>;
};


export type SubscribeImeter_FacilityArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_FacilityOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_FacilityExpression>;
};


export type SubscribeImeter_FacilityByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Facility_EquationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_EquationOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_EquationExpression>;
};


export type SubscribeImeter_Facility_EquationByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Facility_Equation_CategoryArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_Equation_CategoryOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_Equation_CategoryExpression>;
};


export type SubscribeImeter_Facility_Equation_CategoryByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Facility_WellArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_WellOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_WellExpression>;
};


export type SubscribeImeter_Facility_WellByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Facility_Well_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Facility_Well_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Facility_Well_VwExpression>;
};


export type SubscribeImeter_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Humility_RuleExpression>;
};


export type SubscribeImeter_Humility_RuleByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_LabelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_LabelsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_LabelsExpression>;
};


export type SubscribeImeter_Last_Testing_PeriodArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Last_Testing_PeriodOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Last_Testing_PeriodExpression>;
};


export type SubscribeImeter_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_MetricExpression>;
};


export type SubscribeImeter_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Model_DetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_DetailsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Model_DetailsExpression>;
};


export type SubscribeImeter_Model_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Model_Humility_RuleExpression>;
};


export type SubscribeImeter_Model_Humility_RuleByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Model_Status_CountArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Model_Status_CountOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Model_Status_CountExpression>;
};


export type SubscribeImeter_ModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_ModelsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_ModelsExpression>;
};


export type SubscribeImeter_Predicting_Model_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Predicting_Model_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Predicting_Model_VwExpression>;
};


export type SubscribeImeter_Validation_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Validation_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Validation_MetricExpression>;
};


export type SubscribeImeter_Validation_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_WellArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_WellOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_WellExpression>;
};


export type SubscribeImeter_WellByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_AssetExpression>;
};


export type SubscribeImeter_Well_AssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_ConfigArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_ConfigOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_ConfigExpression>;
};


export type SubscribeImeter_Well_ConfigByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_Config_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Config_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Config_VwExpression>;
};


export type SubscribeImeter_Well_Equipment_AssignmentArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Equipment_AssignmentOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Equipment_AssignmentExpression>;
};


export type SubscribeImeter_Well_Equipment_AssignmentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_Humility_RuleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Humility_RuleOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Humility_RuleExpression>;
};


export type SubscribeImeter_Well_Humility_RuleByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_Humility_Rule_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Humility_Rule_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Humility_Rule_VwExpression>;
};


export type SubscribeImeter_Well_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_MetricExpression>;
};


export type SubscribeImeter_Well_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_Metric_Asset_DataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Metric_Asset_DataOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Metric_Asset_DataExpression>;
};


export type SubscribeImeter_Well_Metric_Asset_DataByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeImeter_Well_Metric_VwArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Metric_VwOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Metric_VwExpression>;
};


export type SubscribeImeter_Well_Validation_MetricArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Imeter_Well_Validation_MetricOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Imeter_Well_Validation_MetricExpression>;
};


export type SubscribeImeter_Well_Validation_MetricByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeLabel_GroupArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_GroupOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Label_GroupExpression>;
};


export type SubscribeLabel_GroupByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeLabel_ItemArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_ItemOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Label_ItemExpression>;
};


export type SubscribeLabel_ItemByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeLabel_ReasonArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Label_ReasonOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Label_ReasonExpression>;
};


export type SubscribeLabel_ReasonByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeModelArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ModelOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ModelExpression>;
};


export type SubscribeModelByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeModel_ValidationArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Model_ValidationOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Model_ValidationExpression>;
};


export type SubscribeModel_ValidationByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeModel_Validation_DetailsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Model_Validation_DetailsOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Model_Validation_DetailsExpression>;
};


export type SubscribeProjectArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ProjectOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectExpression>;
};


export type SubscribeProjectByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<UsersOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UsersExpression>;
};


export type SubscribeUsersByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscribeZ_Obs_Imeter_Equipment_Metric_Asset_Data_AssetArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression>;
};


export type SubscribeZ_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AssetByIdExpression = {
  and?: InputMaybe<AssetByIdExpression>;
  asset_id?: InputMaybe<IdExpression>;
  assetref?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_smoothingtag?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<AssetByIdExpression>;
  or?: InputMaybe<AssetByIdExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  project_id?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  tsv?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type AssetByIdInput = {
  asset_id?: InputMaybe<Scalars['ID']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_smoothingtag?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  tsv?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type AssetByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_smoothingtag?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  tsv?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type AssetByIdOutput = {
  __typename?: 'assetByIDOutput';
  assetByID: Array<AssetByIdOutput>;
  asset_id?: Maybe<Scalars['ID']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_smoothingtag?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  tsv?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type AssetExpression = {
  and?: InputMaybe<AssetExpression>;
  asset_id?: InputMaybe<IdExpression>;
  assetref?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_smoothingtag?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<AssetExpression>;
  or?: InputMaybe<AssetExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  project_id?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  tsv?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type AssetInput = {
  asset_id?: InputMaybe<Scalars['ID']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_smoothingtag?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  tsv?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type AssetOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_smoothingtag?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  tsv?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type AssetOutput = {
  __typename?: 'assetOutput';
  asset: Array<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_id?: Maybe<Scalars['ID']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  assetref?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_smoothingtag?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_well?: Maybe<Imeter_WellOutput>;
  imeter_wellByID?: Maybe<Imeter_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  name?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  tsv?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Asset_DataByIdExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Asset_DataByIdExpression>;
  asset_data_id?: InputMaybe<IdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  dataref?: InputMaybe<StringExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Asset_DataByIdExpression>;
  or?: InputMaybe<Asset_DataByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  required_flag?: InputMaybe<IntExpression>;
  tag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Asset_DataByIdInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_data_id?: InputMaybe<Scalars['ID']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  dataref?: InputMaybe<Scalars['String']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  required_flag?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_DataByIdOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_data_id?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  dataref?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  required_flag?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Asset_DataByIdOutput = {
  __typename?: 'asset_dataByIDOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset_dataByID: Array<Asset_DataByIdOutput>;
  asset_data_id?: Maybe<Scalars['ID']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  dataref?: Maybe<Scalars['String']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  required_flag?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Asset_DataExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Asset_DataExpression>;
  asset_data_id?: InputMaybe<IdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  dataref?: InputMaybe<StringExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Asset_DataExpression>;
  or?: InputMaybe<Asset_DataExpression>;
  project_id?: InputMaybe<StringExpression>;
  required_flag?: InputMaybe<IntExpression>;
  tag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Asset_DataInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_data_id?: InputMaybe<Scalars['ID']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  dataref?: InputMaybe<Scalars['String']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  required_flag?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_DataOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_data_id?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  dataref?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  required_flag?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Asset_DataOutput = {
  __typename?: 'asset_dataOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_data_id?: Maybe<Scalars['ID']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  dataref?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  required_flag?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Asset_LabelByIdExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Asset_LabelByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<IdExpression>;
  attributes?: InputMaybe<StringExpression>;
  comment?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_reason_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Asset_LabelByIdExpression>;
  or?: InputMaybe<Asset_LabelByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  username?: InputMaybe<StringExpression>;
};

export type Asset_LabelByIdInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['ID']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_reason_id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_LabelByIdOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  comment?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_reason_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type Asset_LabelByIdOutput = {
  __typename?: 'asset_labelByIDOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_labelByID: Array<Asset_LabelByIdOutput>;
  asset_label_id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reason_id?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Asset_LabelExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Asset_LabelExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<IdExpression>;
  attributes?: InputMaybe<StringExpression>;
  comment?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_reason_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Asset_LabelExpression>;
  or?: InputMaybe<Asset_LabelExpression>;
  project_id?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  username?: InputMaybe<StringExpression>;
};

export type Asset_LabelInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['ID']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_reason_id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_LabelOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  comment?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_reason_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type Asset_LabelOutput = {
  __typename?: 'asset_labelOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  asset_label_id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  label_reason_id?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Asset_Validation_Metric_VwByIdExpression = {
  and?: InputMaybe<Asset_Validation_Metric_VwByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  lbound?: InputMaybe<FloatExpression>;
  not?: InputMaybe<Asset_Validation_Metric_VwByIdExpression>;
  or?: InputMaybe<Asset_Validation_Metric_VwByIdExpression>;
  type?: InputMaybe<StringExpression>;
  ubound?: InputMaybe<FloatExpression>;
  validation_metric_id?: InputMaybe<IntExpression>;
  validation_metric_name?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Asset_Validation_Metric_VwByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  validation_metric_id?: InputMaybe<Scalars['Int']['input']>;
  validation_metric_name?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_Validation_Metric_VwByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  validation_metric_id?: InputMaybe<OrderDirection>;
  validation_metric_name?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Asset_Validation_Metric_VwByIdOutput = {
  __typename?: 'asset_validation_metric_vwByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  asset_validation_metric_vwByID: Array<Asset_Validation_Metric_VwByIdOutput>;
  lbound?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  validation_metric_id?: Maybe<Scalars['Int']['output']>;
  validation_metric_name?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Asset_Validation_Metric_VwExpression = {
  and?: InputMaybe<Asset_Validation_Metric_VwExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  lbound?: InputMaybe<FloatExpression>;
  not?: InputMaybe<Asset_Validation_Metric_VwExpression>;
  or?: InputMaybe<Asset_Validation_Metric_VwExpression>;
  type?: InputMaybe<StringExpression>;
  ubound?: InputMaybe<FloatExpression>;
  validation_metric_id?: InputMaybe<IntExpression>;
  validation_metric_name?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Asset_Validation_Metric_VwInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  validation_metric_id?: InputMaybe<Scalars['Int']['input']>;
  validation_metric_name?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Asset_Validation_Metric_VwOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  validation_metric_id?: InputMaybe<OrderDirection>;
  validation_metric_name?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Asset_Validation_Metric_VwOutput = {
  __typename?: 'asset_validation_metric_vwOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  asset_validation_metric_vw: Array<Asset_Validation_Metric_VwOutput>;
  lbound?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  validation_metric_id?: Maybe<Scalars['Int']['output']>;
  validation_metric_name?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type ExperimentByIdExpression = {
  and?: InputMaybe<ExperimentByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<ExperimentByIdExpression>;
  or?: InputMaybe<ExperimentByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  status?: InputMaybe<StringExpression>;
  status_comment?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type ExperimentByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_comment?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type ExperimentByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  status_comment?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type ExperimentByIdOutput = {
  __typename?: 'experimentByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experimentByID: Array<ExperimentByIdOutput>;
  experiment_id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_comment?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type ExperimentExpression = {
  and?: InputMaybe<ExperimentExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<ExperimentExpression>;
  or?: InputMaybe<ExperimentExpression>;
  project_id?: InputMaybe<StringExpression>;
  status?: InputMaybe<StringExpression>;
  status_comment?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type ExperimentInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_comment?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type ExperimentOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  status_comment?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type ExperimentOutput = {
  __typename?: 'experimentOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_id?: Maybe<Scalars['ID']['output']>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_model_humility_rule?: Maybe<Imeter_Model_Humility_RuleOutput>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_comment?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Experiment_AssetByIdExpression = {
  and?: InputMaybe<Experiment_AssetByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_asset_id?: InputMaybe<IdExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_AssetByIdExpression>;
  or?: InputMaybe<Experiment_AssetByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  smoothingtag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Experiment_AssetByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_asset_id?: InputMaybe<Scalars['ID']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  smoothingtag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment_AssetByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_asset_id?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  smoothingtag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Experiment_AssetByIdOutput = {
  __typename?: 'experiment_assetByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_assetByID: Array<Experiment_AssetByIdOutput>;
  experiment_asset_id?: Maybe<Scalars['ID']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  smoothingtag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Experiment_AssetExpression = {
  and?: InputMaybe<Experiment_AssetExpression>;
  asset_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_asset_id?: InputMaybe<IdExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_AssetExpression>;
  or?: InputMaybe<Experiment_AssetExpression>;
  project_id?: InputMaybe<StringExpression>;
  smoothingtag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Experiment_AssetInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_asset_id?: InputMaybe<Scalars['ID']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  smoothingtag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment_AssetOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_asset_id?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  smoothingtag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Experiment_AssetOutput = {
  __typename?: 'experiment_assetOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset: Array<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_asset_id?: Maybe<Scalars['ID']['output']>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  smoothingtag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Experiment_DataByIdExpression = {
  and?: InputMaybe<Experiment_DataByIdExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_data_id?: InputMaybe<IdExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_DataByIdExpression>;
  or?: InputMaybe<Experiment_DataByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Experiment_DataByIdInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_data_id?: InputMaybe<Scalars['ID']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment_DataByIdOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_data_id?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Experiment_DataByIdOutput = {
  __typename?: 'experiment_dataByIDOutput';
  asset_data_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_dataByID: Array<Experiment_DataByIdOutput>;
  experiment_data_id?: Maybe<Scalars['ID']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Experiment_DataExpression = {
  and?: InputMaybe<Experiment_DataExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_data_id?: InputMaybe<IdExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_DataExpression>;
  or?: InputMaybe<Experiment_DataExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Experiment_DataInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_data_id?: InputMaybe<Scalars['ID']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment_DataOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_data_id?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Experiment_DataOutput = {
  __typename?: 'experiment_dataOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_data_id?: Maybe<Scalars['String']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data: Array<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_data_id?: Maybe<Scalars['ID']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Experiment_LabelByIdExpression = {
  and?: InputMaybe<Experiment_LabelByIdExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  experiment_asset_id?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_label_id?: InputMaybe<IdExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_LabelByIdExpression>;
  or?: InputMaybe<Experiment_LabelByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Experiment_LabelByIdInput = {
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  experiment_asset_id?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_label_id?: InputMaybe<Scalars['ID']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment_LabelByIdOrderBy = {
  asset_label_id?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  experiment_asset_id?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_label_id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Experiment_LabelByIdOutput = {
  __typename?: 'experiment_labelByIDOutput';
  asset_label_id?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  experiment_asset_id?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_labelByID: Array<Experiment_LabelByIdOutput>;
  experiment_label_id?: Maybe<Scalars['ID']['output']>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Experiment_LabelExpression = {
  and?: InputMaybe<Experiment_LabelExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  experiment_asset_id?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_label_id?: InputMaybe<IdExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_LabelExpression>;
  or?: InputMaybe<Experiment_LabelExpression>;
  project_id?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Experiment_LabelInput = {
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  experiment_asset_id?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_label_id?: InputMaybe<Scalars['ID']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment_LabelOrderBy = {
  asset_label_id?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  experiment_asset_id?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_label_id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Experiment_LabelOutput = {
  __typename?: 'experiment_labelOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_asset_id?: Maybe<Scalars['String']['output']>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label: Array<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_label_id?: Maybe<Scalars['ID']['output']>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Experiment_MetricsByIdExpression = {
  and?: InputMaybe<Experiment_MetricsByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_metrics_id?: InputMaybe<IdExpression>;
  metric?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_MetricsByIdExpression>;
  or?: InputMaybe<Experiment_MetricsByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  value?: InputMaybe<FloatExpression>;
};

export type Experiment_MetricsByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_metrics_id?: InputMaybe<Scalars['ID']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type Experiment_MetricsByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_metrics_id?: InputMaybe<OrderDirection>;
  metric?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type Experiment_MetricsByIdOutput = {
  __typename?: 'experiment_metricsByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_metricsByID: Array<Experiment_MetricsByIdOutput>;
  experiment_metrics_id?: Maybe<Scalars['ID']['output']>;
  metric?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Experiment_MetricsExpression = {
  and?: InputMaybe<Experiment_MetricsExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_metrics_id?: InputMaybe<IdExpression>;
  metric?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<Experiment_MetricsExpression>;
  or?: InputMaybe<Experiment_MetricsExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  value?: InputMaybe<FloatExpression>;
};

export type Experiment_MetricsInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_metrics_id?: InputMaybe<Scalars['ID']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type Experiment_MetricsOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_metrics_id?: InputMaybe<OrderDirection>;
  metric?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type Experiment_MetricsOutput = {
  __typename?: 'experiment_metricsOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  experiment_metrics_id?: Maybe<Scalars['ID']['output']>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  metric?: Maybe<Scalars['String']['output']>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  modelref?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Imeter_ConfigByIdExpression = {
  and?: InputMaybe<Imeter_ConfigByIdExpression>;
  config_name?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  not?: InputMaybe<Imeter_ConfigByIdExpression>;
  or?: InputMaybe<Imeter_ConfigByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_ConfigByIdInput = {
  config_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_ConfigByIdOrderBy = {
  config_name?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_ConfigByIdOutput = {
  __typename?: 'imeter_configByIDOutput';
  config_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_configByID: Array<Imeter_ConfigByIdOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_ConfigExpression = {
  and?: InputMaybe<Imeter_ConfigExpression>;
  config_name?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  not?: InputMaybe<Imeter_ConfigExpression>;
  or?: InputMaybe<Imeter_ConfigExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_ConfigInput = {
  config_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_ConfigOrderBy = {
  config_name?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_ConfigOutput = {
  __typename?: 'imeter_configOutput';
  config?: Maybe<Imeter_ConfigOutput>;
  configByID?: Maybe<Imeter_ConfigOutput>;
  config_name?: Maybe<Scalars['String']['output']>;
  config_value?: Maybe<Imeter_Config_ValueOutput>;
  config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_config: Array<Imeter_ConfigOutput>;
  imeter_config_value?: Maybe<Imeter_Config_ValueOutput>;
  imeter_config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
};

export type Imeter_Config_ValueByIdExpression = {
  and?: InputMaybe<Imeter_Config_ValueByIdExpression>;
  config_id?: InputMaybe<IntExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  not?: InputMaybe<Imeter_Config_ValueByIdExpression>;
  or?: InputMaybe<Imeter_Config_ValueByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  value?: InputMaybe<StringExpression>;
};

export type Imeter_Config_ValueByIdInput = {
  config_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Config_ValueByIdOrderBy = {
  config_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type Imeter_Config_ValueByIdOutput = {
  __typename?: 'imeter_config_valueByIDOutput';
  config_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_config_valueByID: Array<Imeter_Config_ValueByIdOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Config_ValueExpression = {
  and?: InputMaybe<Imeter_Config_ValueExpression>;
  config_id?: InputMaybe<IntExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  not?: InputMaybe<Imeter_Config_ValueExpression>;
  or?: InputMaybe<Imeter_Config_ValueExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  value?: InputMaybe<StringExpression>;
};

export type Imeter_Config_ValueInput = {
  config_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Config_ValueOrderBy = {
  config_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type Imeter_Config_ValueOutput = {
  __typename?: 'imeter_config_valueOutput';
  config?: Maybe<Imeter_ConfigOutput>;
  configByID?: Maybe<Imeter_ConfigOutput>;
  config_id?: Maybe<Scalars['Int']['output']>;
  config_value?: Maybe<Imeter_Config_ValueOutput>;
  config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_config_value: Array<Imeter_Config_ValueOutput>;
  imeter_config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
};

export type Imeter_EquipmentByIdExpression = {
  and?: InputMaybe<Imeter_EquipmentByIdExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_metric_params?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IdExpression>;
  facility_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  inline_primo_prprty?: InputMaybe<StringExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  mqtt_source_name?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_EquipmentByIdExpression>;
  or?: InputMaybe<Imeter_EquipmentByIdExpression>;
  short_name?: InputMaybe<StringExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_EquipmentByIdInput = {
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_metric_params?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['ID']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  inline_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  mqtt_source_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_EquipmentByIdOrderBy = {
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_metric_params?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  inline_primo_prprty?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  mqtt_source_name?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  short_name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_EquipmentByIdOutput = {
  __typename?: 'imeter_equipmentByIDOutput';
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_metric_params?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  equipment_id?: Maybe<Scalars['ID']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  imeter_equipmentByID: Array<Imeter_EquipmentByIdOutput>;
  inline_primo_prprty?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  mqtt_source_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_EquipmentExpression = {
  and?: InputMaybe<Imeter_EquipmentExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_metric_params?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IdExpression>;
  facility_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  inline_primo_prprty?: InputMaybe<StringExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  mqtt_source_name?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_EquipmentExpression>;
  or?: InputMaybe<Imeter_EquipmentExpression>;
  short_name?: InputMaybe<StringExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_EquipmentInput = {
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_metric_params?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['ID']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  inline_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  mqtt_source_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_EquipmentOrderBy = {
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_metric_params?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  inline_primo_prprty?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  mqtt_source_name?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  short_name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_EquipmentOutput = {
  __typename?: 'imeter_equipmentOutput';
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_metric_params?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  equipment_id?: Maybe<Scalars['ID']['output']>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  imeter_equipment?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_facility_equation?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  inline_primo_prprty?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  mqtt_source_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Imeter_Equipment_LabelByIdExpression = {
  and?: InputMaybe<Imeter_Equipment_LabelByIdExpression>;
  comment?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_reason_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Equipment_LabelByIdExpression>;
  or?: InputMaybe<Imeter_Equipment_LabelByIdExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_LabelByIdInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_reason_id?: InputMaybe<Scalars['Int']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_LabelByIdOrderBy = {
  comment?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_reason_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_LabelByIdOutput = {
  __typename?: 'imeter_equipment_labelByIDOutput';
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_labelByID: Array<Imeter_Equipment_LabelByIdOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reason_id?: Maybe<Scalars['Int']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_LabelExpression = {
  and?: InputMaybe<Imeter_Equipment_LabelExpression>;
  comment?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_reason_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Equipment_LabelExpression>;
  or?: InputMaybe<Imeter_Equipment_LabelExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_LabelInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_reason_id?: InputMaybe<Scalars['Int']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_LabelOrderBy = {
  comment?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_reason_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_LabelOutput = {
  __typename?: 'imeter_equipment_labelOutput';
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_label: Array<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  label_reason_id?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_MetricByIdExpression = {
  and?: InputMaybe<Imeter_Equipment_MetricByIdExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Equipment_MetricByIdExpression>;
  or?: InputMaybe<Imeter_Equipment_MetricByIdExpression>;
  params?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_MetricByIdInput = {
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_MetricByIdOrderBy = {
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  params?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_MetricByIdOutput = {
  __typename?: 'imeter_equipment_metricByIDOutput';
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref?: Maybe<Scalars['String']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metricByID: Array<Imeter_Equipment_MetricByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_MetricExpression = {
  and?: InputMaybe<Imeter_Equipment_MetricExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Equipment_MetricExpression>;
  or?: InputMaybe<Imeter_Equipment_MetricExpression>;
  params?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_MetricInput = {
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_MetricOrderBy = {
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  params?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_MetricOutput = {
  __typename?: 'imeter_equipment_metricOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_metric: Array<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_humility_rule?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Imeter_Equipment_Metric_Asset_DataByIdExpression = {
  and?: InputMaybe<Imeter_Equipment_Metric_Asset_DataByIdExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_equipment_metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Equipment_Metric_Asset_DataByIdExpression>;
  or?: InputMaybe<Imeter_Equipment_Metric_Asset_DataByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_Metric_Asset_DataByIdInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_equipment_metric_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_Metric_Asset_DataByIdOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_equipment_metric_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_Metric_Asset_DataByIdOutput = {
  __typename?: 'imeter_equipment_metric_asset_dataByIDOutput';
  asset_data_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric_asset_dataByID: Array<Imeter_Equipment_Metric_Asset_DataByIdOutput>;
  imeter_equipment_metric_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_Metric_Asset_DataExpression = {
  and?: InputMaybe<Imeter_Equipment_Metric_Asset_DataExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_equipment_metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Equipment_Metric_Asset_DataExpression>;
  or?: InputMaybe<Imeter_Equipment_Metric_Asset_DataExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_Metric_Asset_DataInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_equipment_metric_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_Metric_Asset_DataOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_equipment_metric_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_Metric_Asset_DataOutput = {
  __typename?: 'imeter_equipment_metric_asset_dataOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_data_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Imeter_Equipment_Metric_VwByIdExpression = {
  and?: InputMaybe<Imeter_Equipment_Metric_VwByIdExpression>;
  attributes?: InputMaybe<StringExpression>;
  category?: InputMaybe<StringExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref_full?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  equipment_name?: InputMaybe<StringExpression>;
  equipment_source_name?: InputMaybe<StringExpression>;
  equipment_type?: InputMaybe<StringExpression>;
  facility_id?: InputMaybe<IntExpression>;
  facility_name?: InputMaybe<StringExpression>;
  facility_primo_prprty?: InputMaybe<StringExpression>;
  id?: InputMaybe<IntExpression>;
  inline_primo_prprty?: InputMaybe<StringExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_name?: InputMaybe<StringExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Equipment_Metric_VwByIdExpression>;
  or?: InputMaybe<Imeter_Equipment_Metric_VwByIdExpression>;
  type?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_Metric_VwByIdInput = {
  attributes?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref_full?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  equipment_name?: InputMaybe<Scalars['String']['input']>;
  equipment_source_name?: InputMaybe<Scalars['String']['input']>;
  equipment_type?: InputMaybe<Scalars['String']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  facility_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inline_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_name?: InputMaybe<Scalars['String']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_Metric_VwByIdOrderBy = {
  attributes?: InputMaybe<OrderDirection>;
  category?: InputMaybe<OrderDirection>;
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref_full?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  equipment_name?: InputMaybe<OrderDirection>;
  equipment_source_name?: InputMaybe<OrderDirection>;
  equipment_type?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  facility_name?: InputMaybe<OrderDirection>;
  facility_primo_prprty?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  inline_primo_prprty?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_name?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_Metric_VwByIdOutput = {
  __typename?: 'imeter_equipment_metric_vwByIDOutput';
  attributes?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref_full?: Maybe<Scalars['String']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  equipment_name?: Maybe<Scalars['String']['output']>;
  equipment_source_name?: Maybe<Scalars['String']['output']>;
  equipment_type?: Maybe<Scalars['String']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  facility_primo_prprty?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imeter_equipment_metric_vwByID: Array<Imeter_Equipment_Metric_VwByIdOutput>;
  inline_primo_prprty?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_name?: Maybe<Scalars['String']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_Metric_VwExpression = {
  and?: InputMaybe<Imeter_Equipment_Metric_VwExpression>;
  attributes?: InputMaybe<StringExpression>;
  category?: InputMaybe<StringExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref_full?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  equipment_name?: InputMaybe<StringExpression>;
  equipment_source_name?: InputMaybe<StringExpression>;
  equipment_type?: InputMaybe<StringExpression>;
  facility_id?: InputMaybe<IntExpression>;
  facility_name?: InputMaybe<StringExpression>;
  facility_primo_prprty?: InputMaybe<StringExpression>;
  id?: InputMaybe<IntExpression>;
  inline_primo_prprty?: InputMaybe<StringExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_name?: InputMaybe<StringExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Equipment_Metric_VwExpression>;
  or?: InputMaybe<Imeter_Equipment_Metric_VwExpression>;
  type?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_Metric_VwInput = {
  attributes?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref_full?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  equipment_name?: InputMaybe<Scalars['String']['input']>;
  equipment_source_name?: InputMaybe<Scalars['String']['input']>;
  equipment_type?: InputMaybe<Scalars['String']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  facility_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inline_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_name?: InputMaybe<Scalars['String']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_Metric_VwOrderBy = {
  attributes?: InputMaybe<OrderDirection>;
  category?: InputMaybe<OrderDirection>;
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref_full?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  equipment_name?: InputMaybe<OrderDirection>;
  equipment_source_name?: InputMaybe<OrderDirection>;
  equipment_type?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  facility_name?: InputMaybe<OrderDirection>;
  facility_primo_prprty?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  inline_primo_prprty?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_name?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_Metric_VwOutput = {
  __typename?: 'imeter_equipment_metric_vwOutput';
  attributes?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref_full?: Maybe<Scalars['String']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  equipment_name?: Maybe<Scalars['String']['output']>;
  equipment_source_name?: Maybe<Scalars['String']['output']>;
  equipment_type?: Maybe<Scalars['String']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  facility_primo_prprty?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imeter_equipment_metric_vw: Array<Imeter_Equipment_Metric_VwOutput>;
  inline_primo_prprty?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_name?: Maybe<Scalars['String']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_Well_Test_Period_VwByIdExpression = {
  and?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  end?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  equipment_name?: InputMaybe<StringExpression>;
  equipment_type?: InputMaybe<StringExpression>;
  facility_id?: InputMaybe<IntExpression>;
  facility_name?: InputMaybe<StringExpression>;
  facility_primo_prprty?: InputMaybe<StringExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  mqtt_source_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwByIdExpression>;
  or?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwByIdExpression>;
  start?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  well_color?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_name?: InputMaybe<StringExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
  well_short_name?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_Well_Test_Period_VwByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  equipment_name?: InputMaybe<Scalars['String']['input']>;
  equipment_type?: InputMaybe<Scalars['String']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  facility_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  mqtt_source_name?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  well_color?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_name?: InputMaybe<Scalars['String']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  well_short_name?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_Well_Test_Period_VwByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  end?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  equipment_name?: InputMaybe<OrderDirection>;
  equipment_type?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  facility_name?: InputMaybe<OrderDirection>;
  facility_primo_prprty?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  mqtt_source_name?: InputMaybe<OrderDirection>;
  start?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  well_color?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_name?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
  well_short_name?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_Well_Test_Period_VwByIdOutput = {
  __typename?: 'imeter_equipment_well_test_period_vwByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  equipment_name?: Maybe<Scalars['String']['output']>;
  equipment_type?: Maybe<Scalars['String']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  facility_primo_prprty?: Maybe<Scalars['String']['output']>;
  imeter_equipment_well_test_period_vwByID: Array<Imeter_Equipment_Well_Test_Period_VwByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  mqtt_source_name?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  well_color?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_name?: Maybe<Scalars['String']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
  well_short_name?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Equipment_Well_Test_Period_VwExpression = {
  and?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  end?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  equipment_name?: InputMaybe<StringExpression>;
  equipment_type?: InputMaybe<StringExpression>;
  facility_id?: InputMaybe<IntExpression>;
  facility_name?: InputMaybe<StringExpression>;
  facility_primo_prprty?: InputMaybe<StringExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  mqtt_source_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwExpression>;
  or?: InputMaybe<Imeter_Equipment_Well_Test_Period_VwExpression>;
  start?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  well_color?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_name?: InputMaybe<StringExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
  well_short_name?: InputMaybe<StringExpression>;
};

export type Imeter_Equipment_Well_Test_Period_VwInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  equipment_name?: InputMaybe<Scalars['String']['input']>;
  equipment_type?: InputMaybe<Scalars['String']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  facility_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  mqtt_source_name?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  well_color?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_name?: InputMaybe<Scalars['String']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  well_short_name?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Equipment_Well_Test_Period_VwOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  end?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  equipment_name?: InputMaybe<OrderDirection>;
  equipment_type?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  facility_name?: InputMaybe<OrderDirection>;
  facility_primo_prprty?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  mqtt_source_name?: InputMaybe<OrderDirection>;
  start?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  well_color?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_name?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
  well_short_name?: InputMaybe<OrderDirection>;
};

export type Imeter_Equipment_Well_Test_Period_VwOutput = {
  __typename?: 'imeter_equipment_well_test_period_vwOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  equipment_name?: Maybe<Scalars['String']['output']>;
  equipment_type?: Maybe<Scalars['String']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  facility_primo_prprty?: Maybe<Scalars['String']['output']>;
  imeter_equipment_well_test_period_vw: Array<Imeter_Equipment_Well_Test_Period_VwOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  mqtt_source_name?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  well_color?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_name?: Maybe<Scalars['String']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
  well_short_name?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_Label_VwByIdExpression = {
  and?: InputMaybe<Imeter_Experiment_Label_VwByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_label_id?: InputMaybe<StringExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Experiment_Label_VwByIdExpression>;
  or?: InputMaybe<Imeter_Experiment_Label_VwByIdExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Experiment_Label_VwByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_label_id?: InputMaybe<Scalars['String']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_name?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Experiment_Label_VwByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_label_id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_name?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_Label_VwByIdOutput = {
  __typename?: 'imeter_experiment_label_vwByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label_id?: Maybe<Scalars['String']['output']>;
  imeter_experiment_label_vwByID: Array<Imeter_Experiment_Label_VwByIdOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_name?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_Label_VwExpression = {
  and?: InputMaybe<Imeter_Experiment_Label_VwExpression>;
  asset_id?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  attributes?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_label_id?: InputMaybe<StringExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Experiment_Label_VwExpression>;
  or?: InputMaybe<Imeter_Experiment_Label_VwExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Experiment_Label_VwInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_label_id?: InputMaybe<Scalars['String']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_name?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Experiment_Label_VwOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  attributes?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_label_id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_name?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_Label_VwOutput = {
  __typename?: 'imeter_experiment_label_vwOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label_id?: Maybe<Scalars['String']['output']>;
  imeter_experiment_label_vw: Array<Imeter_Experiment_Label_VwOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_name?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_Status_CountByIdExpression = {
  and?: InputMaybe<Imeter_Experiment_Status_CountByIdExpression>;
  count?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Experiment_Status_CountByIdExpression>;
  or?: InputMaybe<Imeter_Experiment_Status_CountByIdExpression>;
  status?: InputMaybe<StringExpression>;
};

export type Imeter_Experiment_Status_CountByIdInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Experiment_Status_CountByIdOrderBy = {
  count?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_Status_CountByIdOutput = {
  __typename?: 'imeter_experiment_status_countByIDOutput';
  count?: Maybe<Scalars['Int']['output']>;
  imeter_experiment_status_countByID: Array<Imeter_Experiment_Status_CountByIdOutput>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_Status_CountExpression = {
  and?: InputMaybe<Imeter_Experiment_Status_CountExpression>;
  count?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Experiment_Status_CountExpression>;
  or?: InputMaybe<Imeter_Experiment_Status_CountExpression>;
  status?: InputMaybe<StringExpression>;
};

export type Imeter_Experiment_Status_CountInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Experiment_Status_CountOrderBy = {
  count?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_Status_CountOutput = {
  __typename?: 'imeter_experiment_status_countOutput';
  count?: Maybe<Scalars['Int']['output']>;
  imeter_experiment_status_count: Array<Imeter_Experiment_Status_CountOutput>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_TagsByIdExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Imeter_Experiment_TagsByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  dataref?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Experiment_TagsByIdExpression>;
  or?: InputMaybe<Imeter_Experiment_TagsByIdExpression>;
  required_flag?: InputMaybe<IntExpression>;
  tag?: InputMaybe<StringExpression>;
};

export type Imeter_Experiment_TagsByIdInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  dataref?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  required_flag?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Experiment_TagsByIdOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  dataref?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  required_flag?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_TagsByIdOutput = {
  __typename?: 'imeter_experiment_tagsByIDOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  dataref?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  imeter_experiment_tagsByID: Array<Imeter_Experiment_TagsByIdOutput>;
  required_flag?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_TagsExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Imeter_Experiment_TagsExpression>;
  asset_id?: InputMaybe<StringExpression>;
  dataref?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Experiment_TagsExpression>;
  or?: InputMaybe<Imeter_Experiment_TagsExpression>;
  required_flag?: InputMaybe<IntExpression>;
  tag?: InputMaybe<StringExpression>;
};

export type Imeter_Experiment_TagsInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  dataref?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  required_flag?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Experiment_TagsOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  dataref?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  required_flag?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_TagsOutput = {
  __typename?: 'imeter_experiment_tagsOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  dataref?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  imeter_experiment_tags: Array<Imeter_Experiment_TagsOutput>;
  required_flag?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Experiment_Training_Data_VwByIdExpression = {
  and?: InputMaybe<Imeter_Experiment_Training_Data_VwByIdExpression>;
  assetdataattr?: InputMaybe<StringExpression>;
  assetlabelattr?: InputMaybe<StringExpression>;
  dataref_tags?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Experiment_Training_Data_VwByIdExpression>;
  or?: InputMaybe<Imeter_Experiment_Training_Data_VwByIdExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  smoothing_dataref?: InputMaybe<StringExpression>;
  smoothingtag?: InputMaybe<StringExpression>;
  tags?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  targettag_dataref?: InputMaybe<StringExpression>;
  training_asset_label_id?: InputMaybe<StringExpression>;
  training_enddatetime?: InputMaybe<IntExpression>;
  training_startdatetime?: InputMaybe<IntExpression>;
};

export type Imeter_Experiment_Training_Data_VwByIdInput = {
  assetdataattr?: InputMaybe<Scalars['String']['input']>;
  assetlabelattr?: InputMaybe<Scalars['String']['input']>;
  dataref_tags?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  smoothing_dataref?: InputMaybe<Scalars['String']['input']>;
  smoothingtag?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  targettag_dataref?: InputMaybe<Scalars['String']['input']>;
  training_asset_label_id?: InputMaybe<Scalars['String']['input']>;
  training_enddatetime?: InputMaybe<Scalars['Int']['input']>;
  training_startdatetime?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Experiment_Training_Data_VwByIdOrderBy = {
  assetdataattr?: InputMaybe<OrderDirection>;
  assetlabelattr?: InputMaybe<OrderDirection>;
  dataref_tags?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  smoothing_dataref?: InputMaybe<OrderDirection>;
  smoothingtag?: InputMaybe<OrderDirection>;
  tags?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  targettag_dataref?: InputMaybe<OrderDirection>;
  training_asset_label_id?: InputMaybe<OrderDirection>;
  training_enddatetime?: InputMaybe<OrderDirection>;
  training_startdatetime?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_Training_Data_VwByIdOutput = {
  __typename?: 'imeter_experiment_training_data_vwByIDOutput';
  assetdataattr?: Maybe<Scalars['String']['output']>;
  assetlabelattr?: Maybe<Scalars['String']['output']>;
  dataref_tags?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_experiment_training_data_vwByID: Array<Imeter_Experiment_Training_Data_VwByIdOutput>;
  name?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  smoothing_dataref?: Maybe<Scalars['String']['output']>;
  smoothingtag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  targettag_dataref?: Maybe<Scalars['String']['output']>;
  training_asset_label_id?: Maybe<Scalars['String']['output']>;
  training_enddatetime?: Maybe<Scalars['Int']['output']>;
  training_startdatetime?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Experiment_Training_Data_VwExpression = {
  and?: InputMaybe<Imeter_Experiment_Training_Data_VwExpression>;
  assetdataattr?: InputMaybe<StringExpression>;
  assetlabelattr?: InputMaybe<StringExpression>;
  dataref_tags?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Experiment_Training_Data_VwExpression>;
  or?: InputMaybe<Imeter_Experiment_Training_Data_VwExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  smoothing_dataref?: InputMaybe<StringExpression>;
  smoothingtag?: InputMaybe<StringExpression>;
  tags?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  targettag_dataref?: InputMaybe<StringExpression>;
  training_asset_label_id?: InputMaybe<StringExpression>;
  training_enddatetime?: InputMaybe<IntExpression>;
  training_startdatetime?: InputMaybe<IntExpression>;
};

export type Imeter_Experiment_Training_Data_VwInput = {
  assetdataattr?: InputMaybe<Scalars['String']['input']>;
  assetlabelattr?: InputMaybe<Scalars['String']['input']>;
  dataref_tags?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  smoothing_dataref?: InputMaybe<Scalars['String']['input']>;
  smoothingtag?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  targettag_dataref?: InputMaybe<Scalars['String']['input']>;
  training_asset_label_id?: InputMaybe<Scalars['String']['input']>;
  training_enddatetime?: InputMaybe<Scalars['Int']['input']>;
  training_startdatetime?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Experiment_Training_Data_VwOrderBy = {
  assetdataattr?: InputMaybe<OrderDirection>;
  assetlabelattr?: InputMaybe<OrderDirection>;
  dataref_tags?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  smoothing_dataref?: InputMaybe<OrderDirection>;
  smoothingtag?: InputMaybe<OrderDirection>;
  tags?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  targettag_dataref?: InputMaybe<OrderDirection>;
  training_asset_label_id?: InputMaybe<OrderDirection>;
  training_enddatetime?: InputMaybe<OrderDirection>;
  training_startdatetime?: InputMaybe<OrderDirection>;
};

export type Imeter_Experiment_Training_Data_VwOutput = {
  __typename?: 'imeter_experiment_training_data_vwOutput';
  assetdataattr?: Maybe<Scalars['String']['output']>;
  assetlabelattr?: Maybe<Scalars['String']['output']>;
  dataref_tags?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_experiment_training_data_vw: Array<Imeter_Experiment_Training_Data_VwOutput>;
  name?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  smoothing_dataref?: Maybe<Scalars['String']['output']>;
  smoothingtag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  targettag_dataref?: Maybe<Scalars['String']['output']>;
  training_asset_label_id?: Maybe<Scalars['String']['output']>;
  training_enddatetime?: Maybe<Scalars['Int']['output']>;
  training_startdatetime?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_FacilityByIdExpression = {
  and?: InputMaybe<Imeter_FacilityByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  division_id?: InputMaybe<IntExpression>;
  facility_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_FacilityByIdExpression>;
  or?: InputMaybe<Imeter_FacilityByIdExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  property_type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_FacilityByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  division_id?: InputMaybe<Scalars['Int']['input']>;
  facility_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  property_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_FacilityByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  division_id?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  property_type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_FacilityByIdOutput = {
  __typename?: 'imeter_facilityByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  division_id?: Maybe<Scalars['Int']['output']>;
  facility_id?: Maybe<Scalars['ID']['output']>;
  imeter_facilityByID: Array<Imeter_FacilityByIdOutput>;
  name?: Maybe<Scalars['String']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  property_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_FacilityExpression = {
  and?: InputMaybe<Imeter_FacilityExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  division_id?: InputMaybe<IntExpression>;
  facility_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_FacilityExpression>;
  or?: InputMaybe<Imeter_FacilityExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  property_type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_FacilityInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  division_id?: InputMaybe<Scalars['Int']['input']>;
  facility_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  property_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_FacilityOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  division_id?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  property_type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_FacilityOutput = {
  __typename?: 'imeter_facilityOutput';
  category?: Maybe<Imeter_Facility_Equation_CategoryOutput>;
  categoryByID?: Maybe<Imeter_Facility_Equation_CategoryOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  division_id?: Maybe<Scalars['Int']['output']>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  facility_id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_facility: Array<Imeter_FacilityOutput>;
  imeter_facilityByID?: Maybe<Imeter_FacilityOutput>;
  imeter_facility_equation?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well?: Maybe<Imeter_WellOutput>;
  imeter_wellByID?: Maybe<Imeter_WellOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  name?: Maybe<Scalars['String']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  property_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_EquationByIdExpression = {
  and?: InputMaybe<Imeter_Facility_EquationByIdExpression>;
  category_id?: InputMaybe<IntExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  equation?: InputMaybe<StringExpression>;
  equation_header?: InputMaybe<StringExpression>;
  facility_equation_id?: InputMaybe<IdExpression>;
  facility_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  is_default?: InputMaybe<BooleanExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Facility_EquationByIdExpression>;
  or?: InputMaybe<Imeter_Facility_EquationByIdExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_EquationByIdInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  equation?: InputMaybe<Scalars['String']['input']>;
  equation_header?: InputMaybe<Scalars['String']['input']>;
  facility_equation_id?: InputMaybe<Scalars['ID']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_EquationByIdOrderBy = {
  category_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  equation?: InputMaybe<OrderDirection>;
  equation_header?: InputMaybe<OrderDirection>;
  facility_equation_id?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  is_default?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_EquationByIdOutput = {
  __typename?: 'imeter_facility_equationByIDOutput';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equation?: Maybe<Scalars['String']['output']>;
  equation_header?: Maybe<Scalars['String']['output']>;
  facility_equation_id?: Maybe<Scalars['ID']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  imeter_facility_equationByID: Array<Imeter_Facility_EquationByIdOutput>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_EquationExpression = {
  and?: InputMaybe<Imeter_Facility_EquationExpression>;
  category_id?: InputMaybe<IntExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  equation?: InputMaybe<StringExpression>;
  equation_header?: InputMaybe<StringExpression>;
  facility_equation_id?: InputMaybe<IdExpression>;
  facility_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  is_default?: InputMaybe<BooleanExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Facility_EquationExpression>;
  or?: InputMaybe<Imeter_Facility_EquationExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_EquationInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  equation?: InputMaybe<Scalars['String']['input']>;
  equation_header?: InputMaybe<Scalars['String']['input']>;
  facility_equation_id?: InputMaybe<Scalars['ID']['input']>;
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_EquationOrderBy = {
  category_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  equation?: InputMaybe<OrderDirection>;
  equation_header?: InputMaybe<OrderDirection>;
  facility_equation_id?: InputMaybe<OrderDirection>;
  facility_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  is_default?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_EquationOutput = {
  __typename?: 'imeter_facility_equationOutput';
  category?: Maybe<Imeter_Facility_Equation_CategoryOutput>;
  categoryByID?: Maybe<Imeter_Facility_Equation_CategoryOutput>;
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equation?: Maybe<Scalars['String']['output']>;
  equation_header?: Maybe<Scalars['String']['output']>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  facility_equation_id?: Maybe<Scalars['ID']['output']>;
  facility_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  imeter_equipment?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  imeter_facility_equation: Array<Imeter_Facility_EquationOutput>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_Equation_CategoryByIdExpression = {
  and?: InputMaybe<Imeter_Facility_Equation_CategoryByIdExpression>;
  category_id?: InputMaybe<IdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Facility_Equation_CategoryByIdExpression>;
  or?: InputMaybe<Imeter_Facility_Equation_CategoryByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_Equation_CategoryByIdInput = {
  category_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_Equation_CategoryByIdOrderBy = {
  category_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_Equation_CategoryByIdOutput = {
  __typename?: 'imeter_facility_equation_categoryByIDOutput';
  category_id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imeter_facility_equation_categoryByID: Array<Imeter_Facility_Equation_CategoryByIdOutput>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_Equation_CategoryExpression = {
  and?: InputMaybe<Imeter_Facility_Equation_CategoryExpression>;
  category_id?: InputMaybe<IdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Facility_Equation_CategoryExpression>;
  or?: InputMaybe<Imeter_Facility_Equation_CategoryExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_Equation_CategoryInput = {
  category_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_Equation_CategoryOrderBy = {
  category_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_Equation_CategoryOutput = {
  __typename?: 'imeter_facility_equation_categoryOutput';
  category?: Maybe<Imeter_Facility_Equation_CategoryOutput>;
  categoryByID?: Maybe<Imeter_Facility_Equation_CategoryOutput>;
  category_id?: Maybe<Scalars['ID']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  imeter_facility_equation?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_equation_category: Array<Imeter_Facility_Equation_CategoryOutput>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_WellByIdExpression = {
  and?: InputMaybe<Imeter_Facility_WellByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_facility_id?: InputMaybe<IntExpression>;
  imeter_well_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Facility_WellByIdExpression>;
  or?: InputMaybe<Imeter_Facility_WellByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_WellByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_facility_id?: InputMaybe<Scalars['Int']['input']>;
  imeter_well_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_WellByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_facility_id?: InputMaybe<OrderDirection>;
  imeter_well_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_WellByIdOutput = {
  __typename?: 'imeter_facility_wellByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_facility_id?: Maybe<Scalars['Int']['output']>;
  imeter_facility_wellByID: Array<Imeter_Facility_WellByIdOutput>;
  imeter_well_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_WellExpression = {
  and?: InputMaybe<Imeter_Facility_WellExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_facility_id?: InputMaybe<IntExpression>;
  imeter_well_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Facility_WellExpression>;
  or?: InputMaybe<Imeter_Facility_WellExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_WellInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_facility_id?: InputMaybe<Scalars['Int']['input']>;
  imeter_well_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_WellOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_facility_id?: InputMaybe<OrderDirection>;
  imeter_well_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_WellOutput = {
  __typename?: 'imeter_facility_wellOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  imeter_facility?: Maybe<Imeter_FacilityOutput>;
  imeter_facilityByID?: Maybe<Imeter_FacilityOutput>;
  imeter_facility_equation?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_equationByID?: Maybe<Imeter_Facility_EquationOutput>;
  imeter_facility_id?: Maybe<Scalars['Int']['output']>;
  imeter_facility_well: Array<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well?: Maybe<Imeter_WellOutput>;
  imeter_wellByID?: Maybe<Imeter_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_Well_VwByIdExpression = {
  and?: InputMaybe<Imeter_Facility_Well_VwByIdExpression>;
  facility_id?: InputMaybe<IntExpression>;
  facility_name?: InputMaybe<StringExpression>;
  facility_primo_prprty?: InputMaybe<StringExpression>;
  id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Facility_Well_VwByIdExpression>;
  or?: InputMaybe<Imeter_Facility_Well_VwByIdExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_name?: InputMaybe<StringExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_Well_VwByIdInput = {
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  facility_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_name?: InputMaybe<Scalars['String']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_Well_VwByIdOrderBy = {
  facility_id?: InputMaybe<OrderDirection>;
  facility_name?: InputMaybe<OrderDirection>;
  facility_primo_prprty?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_name?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_Well_VwByIdOutput = {
  __typename?: 'imeter_facility_well_vwByIDOutput';
  facility_id?: Maybe<Scalars['Int']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  facility_primo_prprty?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imeter_facility_well_vwByID: Array<Imeter_Facility_Well_VwByIdOutput>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_name?: Maybe<Scalars['String']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Facility_Well_VwExpression = {
  and?: InputMaybe<Imeter_Facility_Well_VwExpression>;
  facility_id?: InputMaybe<IntExpression>;
  facility_name?: InputMaybe<StringExpression>;
  facility_primo_prprty?: InputMaybe<StringExpression>;
  id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Facility_Well_VwExpression>;
  or?: InputMaybe<Imeter_Facility_Well_VwExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_name?: InputMaybe<StringExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Imeter_Facility_Well_VwInput = {
  facility_id?: InputMaybe<Scalars['Int']['input']>;
  facility_name?: InputMaybe<Scalars['String']['input']>;
  facility_primo_prprty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_name?: InputMaybe<Scalars['String']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Facility_Well_VwOrderBy = {
  facility_id?: InputMaybe<OrderDirection>;
  facility_name?: InputMaybe<OrderDirection>;
  facility_primo_prprty?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_name?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Imeter_Facility_Well_VwOutput = {
  __typename?: 'imeter_facility_well_vwOutput';
  facility_id?: Maybe<Scalars['Int']['output']>;
  facility_name?: Maybe<Scalars['String']['output']>;
  facility_primo_prprty?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imeter_facility_well_vw: Array<Imeter_Facility_Well_VwOutput>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_name?: Maybe<Scalars['String']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Humility_RuleByIdExpression = {
  action_type?: InputMaybe<StringExpression>;
  and?: InputMaybe<Imeter_Humility_RuleByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_lbound?: InputMaybe<FloatExpression>;
  default_ubound?: InputMaybe<FloatExpression>;
  id?: InputMaybe<IdExpression>;
  metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Humility_RuleByIdExpression>;
  or?: InputMaybe<Imeter_Humility_RuleByIdExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  trigger_type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Humility_RuleByIdInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_lbound?: InputMaybe<Scalars['Float']['input']>;
  default_ubound?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  trigger_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Humility_RuleByIdOrderBy = {
  action_type?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_lbound?: InputMaybe<OrderDirection>;
  default_ubound?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  trigger_type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Humility_RuleByIdOutput = {
  __typename?: 'imeter_humility_ruleByIDOutput';
  action_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_lbound?: Maybe<Scalars['Float']['output']>;
  default_ubound?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_humility_ruleByID: Array<Imeter_Humility_RuleByIdOutput>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  trigger_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Humility_RuleExpression = {
  action_type?: InputMaybe<StringExpression>;
  and?: InputMaybe<Imeter_Humility_RuleExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_lbound?: InputMaybe<FloatExpression>;
  default_ubound?: InputMaybe<FloatExpression>;
  id?: InputMaybe<IdExpression>;
  metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Humility_RuleExpression>;
  or?: InputMaybe<Imeter_Humility_RuleExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  trigger_type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Humility_RuleInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_lbound?: InputMaybe<Scalars['Float']['input']>;
  default_ubound?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  trigger_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Humility_RuleOrderBy = {
  action_type?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_lbound?: InputMaybe<OrderDirection>;
  default_ubound?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  trigger_type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Humility_RuleOutput = {
  __typename?: 'imeter_humility_ruleOutput';
  action_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_lbound?: Maybe<Scalars['Float']['output']>;
  default_ubound?: Maybe<Scalars['Float']['output']>;
  humility_rule?: Maybe<Imeter_Humility_RuleOutput>;
  humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_humility_rule: Array<Imeter_Humility_RuleOutput>;
  imeter_humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  trigger_type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
};

export type Imeter_LabelsByIdExpression = {
  and?: InputMaybe<Imeter_LabelsByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  comment?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  label_group_id?: InputMaybe<StringExpression>;
  label_group_name?: InputMaybe<StringExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_item_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_LabelsByIdExpression>;
  or?: InputMaybe<Imeter_LabelsByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  username?: InputMaybe<StringExpression>;
};

export type Imeter_LabelsByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  label_group_id?: InputMaybe<Scalars['String']['input']>;
  label_group_name?: InputMaybe<Scalars['String']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_item_name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_LabelsByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  comment?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  label_group_id?: InputMaybe<OrderDirection>;
  label_group_name?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_item_name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type Imeter_LabelsByIdOutput = {
  __typename?: 'imeter_labelsByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  imeter_labelsByID: Array<Imeter_LabelsByIdOutput>;
  label_group_id?: Maybe<Scalars['String']['output']>;
  label_group_name?: Maybe<Scalars['String']['output']>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_item_name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Imeter_LabelsExpression = {
  and?: InputMaybe<Imeter_LabelsExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  comment?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  enddatetime?: InputMaybe<IntExpression>;
  label_group_id?: InputMaybe<StringExpression>;
  label_group_name?: InputMaybe<StringExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  label_item_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_LabelsExpression>;
  or?: InputMaybe<Imeter_LabelsExpression>;
  project_id?: InputMaybe<StringExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  username?: InputMaybe<StringExpression>;
};

export type Imeter_LabelsInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  enddatetime?: InputMaybe<Scalars['Int']['input']>;
  label_group_id?: InputMaybe<Scalars['String']['input']>;
  label_group_name?: InputMaybe<Scalars['String']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  label_item_name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_LabelsOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  comment?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  enddatetime?: InputMaybe<OrderDirection>;
  label_group_id?: InputMaybe<OrderDirection>;
  label_group_name?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  label_item_name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type Imeter_LabelsOutput = {
  __typename?: 'imeter_labelsOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  enddatetime?: Maybe<Scalars['Int']['output']>;
  imeter_labels: Array<Imeter_LabelsOutput>;
  label_group_id?: Maybe<Scalars['String']['output']>;
  label_group_name?: Maybe<Scalars['String']['output']>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_item_name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Last_Testing_PeriodByIdExpression = {
  and?: InputMaybe<Imeter_Last_Testing_PeriodByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  facilityprimo?: InputMaybe<StringExpression>;
  label_name?: InputMaybe<StringExpression>;
  last_testing_period?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Last_Testing_PeriodByIdExpression>;
  or?: InputMaybe<Imeter_Last_Testing_PeriodByIdExpression>;
  wellprimo?: InputMaybe<StringExpression>;
};

export type Imeter_Last_Testing_PeriodByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  facilityprimo?: InputMaybe<Scalars['String']['input']>;
  label_name?: InputMaybe<Scalars['String']['input']>;
  last_testing_period?: InputMaybe<Scalars['Int']['input']>;
  wellprimo?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Last_Testing_PeriodByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  facilityprimo?: InputMaybe<OrderDirection>;
  label_name?: InputMaybe<OrderDirection>;
  last_testing_period?: InputMaybe<OrderDirection>;
  wellprimo?: InputMaybe<OrderDirection>;
};

export type Imeter_Last_Testing_PeriodByIdOutput = {
  __typename?: 'imeter_last_testing_periodByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  facilityprimo?: Maybe<Scalars['String']['output']>;
  imeter_last_testing_periodByID: Array<Imeter_Last_Testing_PeriodByIdOutput>;
  label_name?: Maybe<Scalars['String']['output']>;
  last_testing_period?: Maybe<Scalars['Int']['output']>;
  wellprimo?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Last_Testing_PeriodExpression = {
  and?: InputMaybe<Imeter_Last_Testing_PeriodExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  facilityprimo?: InputMaybe<StringExpression>;
  label_name?: InputMaybe<StringExpression>;
  last_testing_period?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Last_Testing_PeriodExpression>;
  or?: InputMaybe<Imeter_Last_Testing_PeriodExpression>;
  wellprimo?: InputMaybe<StringExpression>;
};

export type Imeter_Last_Testing_PeriodInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  facilityprimo?: InputMaybe<Scalars['String']['input']>;
  label_name?: InputMaybe<Scalars['String']['input']>;
  last_testing_period?: InputMaybe<Scalars['Int']['input']>;
  wellprimo?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Last_Testing_PeriodOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  facilityprimo?: InputMaybe<OrderDirection>;
  label_name?: InputMaybe<OrderDirection>;
  last_testing_period?: InputMaybe<OrderDirection>;
  wellprimo?: InputMaybe<OrderDirection>;
};

export type Imeter_Last_Testing_PeriodOutput = {
  __typename?: 'imeter_last_testing_periodOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  facilityprimo?: Maybe<Scalars['String']['output']>;
  imeter_last_testing_period: Array<Imeter_Last_Testing_PeriodOutput>;
  label_name?: Maybe<Scalars['String']['output']>;
  last_testing_period?: Maybe<Scalars['Int']['output']>;
  wellprimo?: Maybe<Scalars['String']['output']>;
};

export type Imeter_MetricByIdExpression = {
  and?: InputMaybe<Imeter_MetricByIdExpression>;
  category?: InputMaybe<StringExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref?: InputMaybe<StringExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IdExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_MetricByIdExpression>;
  or?: InputMaybe<Imeter_MetricByIdExpression>;
  type?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_MetricByIdInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref?: InputMaybe<Scalars['String']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['ID']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_MetricByIdOrderBy = {
  category?: InputMaybe<OrderDirection>;
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_MetricByIdOutput = {
  __typename?: 'imeter_metricByIDOutput';
  category?: Maybe<Scalars['String']['output']>;
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref?: Maybe<Scalars['String']['output']>;
  imeter_metricByID: Array<Imeter_MetricByIdOutput>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['ID']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_MetricExpression = {
  and?: InputMaybe<Imeter_MetricExpression>;
  category?: InputMaybe<StringExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref?: InputMaybe<StringExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IdExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_MetricExpression>;
  or?: InputMaybe<Imeter_MetricExpression>;
  type?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_MetricInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref?: InputMaybe<Scalars['String']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['ID']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_MetricOrderBy = {
  category?: InputMaybe<OrderDirection>;
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_MetricOutput = {
  __typename?: 'imeter_metricOutput';
  category?: Maybe<Scalars['String']['output']>;
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_humility_rule?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_metric: Array<Imeter_MetricOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  metric_id?: Maybe<Scalars['ID']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Imeter_Model_DetailsByIdExpression = {
  and?: InputMaybe<Imeter_Model_DetailsByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  exp_created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_name?: InputMaybe<StringExpression>;
  experiment_status?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  model_created_at?: InputMaybe<StringExpression>;
  model_end_time?: InputMaybe<StringExpression>;
  model_end_time_epoch?: InputMaybe<FloatExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_start_time?: InputMaybe<StringExpression>;
  model_start_time_epoch?: InputMaybe<FloatExpression>;
  model_status?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  model_type?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Model_DetailsByIdExpression>;
  or?: InputMaybe<Imeter_Model_DetailsByIdExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  project_ref?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Model_DetailsByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  exp_created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_name?: InputMaybe<Scalars['String']['input']>;
  experiment_status?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  model_created_at?: InputMaybe<Scalars['String']['input']>;
  model_end_time?: InputMaybe<Scalars['String']['input']>;
  model_end_time_epoch?: InputMaybe<Scalars['Float']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_start_time?: InputMaybe<Scalars['String']['input']>;
  model_start_time_epoch?: InputMaybe<Scalars['Float']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  model_type?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  project_ref?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Model_DetailsByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  exp_created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_name?: InputMaybe<OrderDirection>;
  experiment_status?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  model_created_at?: InputMaybe<OrderDirection>;
  model_end_time?: InputMaybe<OrderDirection>;
  model_end_time_epoch?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_start_time?: InputMaybe<OrderDirection>;
  model_start_time_epoch?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  model_type?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  project_ref?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Model_DetailsByIdOutput = {
  __typename?: 'imeter_model_detailsByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  exp_created_by?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_name?: Maybe<Scalars['String']['output']>;
  experiment_status?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_model_detailsByID: Array<Imeter_Model_DetailsByIdOutput>;
  model_created_at?: Maybe<Scalars['String']['output']>;
  model_end_time?: Maybe<Scalars['String']['output']>;
  model_end_time_epoch?: Maybe<Scalars['Float']['output']>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_start_time?: Maybe<Scalars['String']['output']>;
  model_start_time_epoch?: Maybe<Scalars['Float']['output']>;
  model_status?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_type?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  project_ref?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Model_DetailsExpression = {
  and?: InputMaybe<Imeter_Model_DetailsExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  exp_created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_name?: InputMaybe<StringExpression>;
  experiment_status?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  model_created_at?: InputMaybe<StringExpression>;
  model_end_time?: InputMaybe<StringExpression>;
  model_end_time_epoch?: InputMaybe<FloatExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_start_time?: InputMaybe<StringExpression>;
  model_start_time_epoch?: InputMaybe<FloatExpression>;
  model_status?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  model_type?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Model_DetailsExpression>;
  or?: InputMaybe<Imeter_Model_DetailsExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  project_ref?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Model_DetailsInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  exp_created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_name?: InputMaybe<Scalars['String']['input']>;
  experiment_status?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  model_created_at?: InputMaybe<Scalars['String']['input']>;
  model_end_time?: InputMaybe<Scalars['String']['input']>;
  model_end_time_epoch?: InputMaybe<Scalars['Float']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_start_time?: InputMaybe<Scalars['String']['input']>;
  model_start_time_epoch?: InputMaybe<Scalars['Float']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  model_type?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  project_ref?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Model_DetailsOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  exp_created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_name?: InputMaybe<OrderDirection>;
  experiment_status?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  model_created_at?: InputMaybe<OrderDirection>;
  model_end_time?: InputMaybe<OrderDirection>;
  model_end_time_epoch?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_start_time?: InputMaybe<OrderDirection>;
  model_start_time_epoch?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  model_type?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  project_ref?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Model_DetailsOutput = {
  __typename?: 'imeter_model_detailsOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  exp_created_by?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_name?: Maybe<Scalars['String']['output']>;
  experiment_status?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_model_details: Array<Imeter_Model_DetailsOutput>;
  model_created_at?: Maybe<Scalars['String']['output']>;
  model_end_time?: Maybe<Scalars['String']['output']>;
  model_end_time_epoch?: Maybe<Scalars['Float']['output']>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_start_time?: Maybe<Scalars['String']['output']>;
  model_start_time_epoch?: Maybe<Scalars['Float']['output']>;
  model_status?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_type?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  project_ref?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Model_Humility_RuleByIdExpression = {
  action_type?: InputMaybe<StringExpression>;
  and?: InputMaybe<Imeter_Model_Humility_RuleByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  lbound?: InputMaybe<FloatExpression>;
  model_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Model_Humility_RuleByIdExpression>;
  or?: InputMaybe<Imeter_Model_Humility_RuleByIdExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  rule_name?: InputMaybe<StringExpression>;
  tag?: InputMaybe<StringExpression>;
  trigger_type?: InputMaybe<StringExpression>;
  ubound?: InputMaybe<FloatExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Model_Humility_RuleByIdInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  rule_name?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  trigger_type?: InputMaybe<Scalars['String']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Model_Humility_RuleByIdOrderBy = {
  action_type?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  rule_name?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
  trigger_type?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Model_Humility_RuleByIdOutput = {
  __typename?: 'imeter_model_humility_ruleByIDOutput';
  action_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_model_humility_ruleByID: Array<Imeter_Model_Humility_RuleByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  lbound?: Maybe<Scalars['Float']['output']>;
  model_id?: Maybe<Scalars['String']['output']>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  rule_name?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  trigger_type?: Maybe<Scalars['String']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Model_Humility_RuleExpression = {
  action_type?: InputMaybe<StringExpression>;
  and?: InputMaybe<Imeter_Model_Humility_RuleExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  lbound?: InputMaybe<FloatExpression>;
  model_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Model_Humility_RuleExpression>;
  or?: InputMaybe<Imeter_Model_Humility_RuleExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  rule_name?: InputMaybe<StringExpression>;
  tag?: InputMaybe<StringExpression>;
  trigger_type?: InputMaybe<StringExpression>;
  ubound?: InputMaybe<FloatExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Model_Humility_RuleInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  rule_name?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  trigger_type?: InputMaybe<Scalars['String']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Model_Humility_RuleOrderBy = {
  action_type?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  rule_name?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
  trigger_type?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Model_Humility_RuleOutput = {
  __typename?: 'imeter_model_humility_ruleOutput';
  action_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_model_humility_rule?: Maybe<Imeter_Model_Humility_RuleOutput>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  lbound?: Maybe<Scalars['Float']['output']>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  rule_name?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  trigger_type?: Maybe<Scalars['String']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Model_Status_CountByIdExpression = {
  and?: InputMaybe<Imeter_Model_Status_CountByIdExpression>;
  count?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Model_Status_CountByIdExpression>;
  or?: InputMaybe<Imeter_Model_Status_CountByIdExpression>;
  status?: InputMaybe<StringExpression>;
};

export type Imeter_Model_Status_CountByIdInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Model_Status_CountByIdOrderBy = {
  count?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type Imeter_Model_Status_CountByIdOutput = {
  __typename?: 'imeter_model_status_countByIDOutput';
  count?: Maybe<Scalars['Int']['output']>;
  imeter_model_status_countByID: Array<Imeter_Model_Status_CountByIdOutput>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Model_Status_CountExpression = {
  and?: InputMaybe<Imeter_Model_Status_CountExpression>;
  count?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Model_Status_CountExpression>;
  or?: InputMaybe<Imeter_Model_Status_CountExpression>;
  status?: InputMaybe<StringExpression>;
};

export type Imeter_Model_Status_CountInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Model_Status_CountOrderBy = {
  count?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type Imeter_Model_Status_CountOutput = {
  __typename?: 'imeter_model_status_countOutput';
  count?: Maybe<Scalars['Int']['output']>;
  imeter_model_status_count: Array<Imeter_Model_Status_CountOutput>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Imeter_ModelsByIdExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Imeter_ModelsByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_name?: InputMaybe<StringExpression>;
  experiment_status?: InputMaybe<StringExpression>;
  feature_query?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_status?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_ModelsByIdExpression>;
  or?: InputMaybe<Imeter_ModelsByIdExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  start_date?: InputMaybe<StringExpression>;
  status_comment?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_ModelsByIdInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_name?: InputMaybe<Scalars['String']['input']>;
  experiment_status?: InputMaybe<Scalars['String']['input']>;
  feature_query?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status_comment?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_ModelsByIdOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_name?: InputMaybe<OrderDirection>;
  experiment_status?: InputMaybe<OrderDirection>;
  feature_query?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  start_date?: InputMaybe<OrderDirection>;
  status_comment?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_ModelsByIdOutput = {
  __typename?: 'imeter_modelsByIDOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_name?: Maybe<Scalars['String']['output']>;
  experiment_status?: Maybe<Scalars['String']['output']>;
  feature_query?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_modelsByID: Array<Imeter_ModelsByIdOutput>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_status?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  status_comment?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_ModelsExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<Imeter_ModelsExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_name?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_name?: InputMaybe<StringExpression>;
  experiment_status?: InputMaybe<StringExpression>;
  feature_query?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_status?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_ModelsExpression>;
  or?: InputMaybe<Imeter_ModelsExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  start_date?: InputMaybe<StringExpression>;
  status_comment?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_ModelsInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_name?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_name?: InputMaybe<Scalars['String']['input']>;
  experiment_status?: InputMaybe<Scalars['String']['input']>;
  feature_query?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status_comment?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_ModelsOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  asset_name?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_name?: InputMaybe<OrderDirection>;
  experiment_status?: InputMaybe<OrderDirection>;
  feature_query?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  start_date?: InputMaybe<OrderDirection>;
  status_comment?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_ModelsOutput = {
  __typename?: 'imeter_modelsOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_name?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_name?: Maybe<Scalars['String']['output']>;
  experiment_status?: Maybe<Scalars['String']['output']>;
  feature_query?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  imeter_models: Array<Imeter_ModelsOutput>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_status?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  status_comment?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Predicting_Model_VwByIdExpression = {
  and?: InputMaybe<Imeter_Predicting_Model_VwByIdExpression>;
  asset_type?: InputMaybe<StringExpression>;
  division_id?: InputMaybe<IntExpression>;
  model_status?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Predicting_Model_VwByIdExpression>;
  or?: InputMaybe<Imeter_Predicting_Model_VwByIdExpression>;
  total_model_count?: InputMaybe<IntExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Imeter_Predicting_Model_VwByIdInput = {
  asset_type?: InputMaybe<Scalars['String']['input']>;
  division_id?: InputMaybe<Scalars['Int']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  total_model_count?: InputMaybe<Scalars['Int']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Predicting_Model_VwByIdOrderBy = {
  asset_type?: InputMaybe<OrderDirection>;
  division_id?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  total_model_count?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Imeter_Predicting_Model_VwByIdOutput = {
  __typename?: 'imeter_predicting_model_vwByIDOutput';
  asset_type?: Maybe<Scalars['String']['output']>;
  division_id?: Maybe<Scalars['Int']['output']>;
  imeter_predicting_model_vwByID: Array<Imeter_Predicting_Model_VwByIdOutput>;
  model_status?: Maybe<Scalars['String']['output']>;
  total_model_count?: Maybe<Scalars['Int']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Predicting_Model_VwExpression = {
  and?: InputMaybe<Imeter_Predicting_Model_VwExpression>;
  asset_type?: InputMaybe<StringExpression>;
  division_id?: InputMaybe<IntExpression>;
  model_status?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Predicting_Model_VwExpression>;
  or?: InputMaybe<Imeter_Predicting_Model_VwExpression>;
  total_model_count?: InputMaybe<IntExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Imeter_Predicting_Model_VwInput = {
  asset_type?: InputMaybe<Scalars['String']['input']>;
  division_id?: InputMaybe<Scalars['Int']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  total_model_count?: InputMaybe<Scalars['Int']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Predicting_Model_VwOrderBy = {
  asset_type?: InputMaybe<OrderDirection>;
  division_id?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  total_model_count?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Imeter_Predicting_Model_VwOutput = {
  __typename?: 'imeter_predicting_model_vwOutput';
  asset_type?: Maybe<Scalars['String']['output']>;
  division_id?: Maybe<Scalars['Int']['output']>;
  imeter_predicting_model_vw: Array<Imeter_Predicting_Model_VwOutput>;
  model_status?: Maybe<Scalars['String']['output']>;
  total_model_count?: Maybe<Scalars['Int']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Validation_MetricByIdExpression = {
  and?: InputMaybe<Imeter_Validation_MetricByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_lbound?: InputMaybe<FloatExpression>;
  default_ubound?: InputMaybe<FloatExpression>;
  id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Validation_MetricByIdExpression>;
  or?: InputMaybe<Imeter_Validation_MetricByIdExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Validation_MetricByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_lbound?: InputMaybe<Scalars['Float']['input']>;
  default_ubound?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Validation_MetricByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_lbound?: InputMaybe<OrderDirection>;
  default_ubound?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Validation_MetricByIdOutput = {
  __typename?: 'imeter_validation_metricByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_lbound?: Maybe<Scalars['Float']['output']>;
  default_ubound?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_validation_metricByID: Array<Imeter_Validation_MetricByIdOutput>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Validation_MetricExpression = {
  and?: InputMaybe<Imeter_Validation_MetricExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  default_lbound?: InputMaybe<FloatExpression>;
  default_ubound?: InputMaybe<FloatExpression>;
  id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Validation_MetricExpression>;
  or?: InputMaybe<Imeter_Validation_MetricExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Validation_MetricInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  default_lbound?: InputMaybe<Scalars['Float']['input']>;
  default_ubound?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Validation_MetricOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  default_lbound?: InputMaybe<OrderDirection>;
  default_ubound?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Validation_MetricOutput = {
  __typename?: 'imeter_validation_metricOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  default_lbound?: Maybe<Scalars['Float']['output']>;
  default_ubound?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_validation_metric: Array<Imeter_Validation_MetricOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  validation_metric?: Maybe<Imeter_Validation_MetricOutput>;
  validation_metricByID?: Maybe<Imeter_Validation_MetricOutput>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
};

export type Imeter_WellByIdExpression = {
  and?: InputMaybe<Imeter_WellByIdExpression>;
  color?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  division_id?: InputMaybe<IntExpression>;
  is_accum_registered?: InputMaybe<BooleanExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_WellByIdExpression>;
  or?: InputMaybe<Imeter_WellByIdExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  pro_count_enabled?: InputMaybe<BooleanExpression>;
  property_type?: InputMaybe<StringExpression>;
  short_name?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IdExpression>;
};

export type Imeter_WellByIdInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  division_id?: InputMaybe<Scalars['Int']['input']>;
  is_accum_registered?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  pro_count_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  property_type?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['ID']['input']>;
};

export type Imeter_WellByIdOrderBy = {
  color?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  division_id?: InputMaybe<OrderDirection>;
  is_accum_registered?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  pro_count_enabled?: InputMaybe<OrderDirection>;
  property_type?: InputMaybe<OrderDirection>;
  short_name?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_WellByIdOutput = {
  __typename?: 'imeter_wellByIDOutput';
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  division_id?: Maybe<Scalars['Int']['output']>;
  imeter_wellByID: Array<Imeter_WellByIdOutput>;
  is_accum_registered?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  pro_count_enabled?: Maybe<Scalars['Boolean']['output']>;
  property_type?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['ID']['output']>;
};

export type Imeter_WellExpression = {
  and?: InputMaybe<Imeter_WellExpression>;
  color?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  division_id?: InputMaybe<IntExpression>;
  is_accum_registered?: InputMaybe<BooleanExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_WellExpression>;
  or?: InputMaybe<Imeter_WellExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  pro_count_enabled?: InputMaybe<BooleanExpression>;
  property_type?: InputMaybe<StringExpression>;
  short_name?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IdExpression>;
};

export type Imeter_WellInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  division_id?: InputMaybe<Scalars['Int']['input']>;
  is_accum_registered?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  pro_count_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  property_type?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['ID']['input']>;
};

export type Imeter_WellOrderBy = {
  color?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  division_id?: InputMaybe<OrderDirection>;
  is_accum_registered?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  pro_count_enabled?: InputMaybe<OrderDirection>;
  property_type?: InputMaybe<OrderDirection>;
  short_name?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_WellOutput = {
  __typename?: 'imeter_wellOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  color?: Maybe<Scalars['String']['output']>;
  config?: Maybe<Imeter_ConfigOutput>;
  configByID?: Maybe<Imeter_ConfigOutput>;
  config_value?: Maybe<Imeter_Config_ValueOutput>;
  config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  division_id?: Maybe<Scalars['Int']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  humility_rule?: Maybe<Imeter_Humility_RuleOutput>;
  humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_facility?: Maybe<Imeter_FacilityOutput>;
  imeter_facilityByID?: Maybe<Imeter_FacilityOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well?: Maybe<Imeter_WellOutput>;
  imeter_wellByID?: Maybe<Imeter_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  is_accum_registered?: Maybe<Scalars['Boolean']['output']>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  name?: Maybe<Scalars['String']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  pro_count_enabled?: Maybe<Scalars['Boolean']['output']>;
  property_type?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  validation_metric?: Maybe<Imeter_Validation_MetricOutput>;
  validation_metricByID?: Maybe<Imeter_Validation_MetricOutput>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  well_id?: Maybe<Scalars['ID']['output']>;
};

export type Imeter_Well_AssetByIdExpression = {
  and?: InputMaybe<Imeter_Well_AssetByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_well_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Well_AssetByIdExpression>;
  or?: InputMaybe<Imeter_Well_AssetByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Well_AssetByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_well_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Well_AssetByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_well_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_AssetByIdOutput = {
  __typename?: 'imeter_well_assetByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_well_assetByID: Array<Imeter_Well_AssetByIdOutput>;
  imeter_well_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Well_AssetExpression = {
  and?: InputMaybe<Imeter_Well_AssetExpression>;
  asset_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_well_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Well_AssetExpression>;
  or?: InputMaybe<Imeter_Well_AssetExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Well_AssetInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_well_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Well_AssetOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_well_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_AssetOutput = {
  __typename?: 'imeter_well_assetOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well?: Maybe<Imeter_WellOutput>;
  imeter_wellByID?: Maybe<Imeter_WellOutput>;
  imeter_well_asset: Array<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Imeter_Well_ConfigByIdExpression = {
  and?: InputMaybe<Imeter_Well_ConfigByIdExpression>;
  config_id?: InputMaybe<IdExpression>;
  config_value_id?: InputMaybe<IntExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_ConfigByIdExpression>;
  or?: InputMaybe<Imeter_Well_ConfigByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IdExpression>;
};

export type Imeter_Well_ConfigByIdInput = {
  config_id?: InputMaybe<Scalars['ID']['input']>;
  config_value_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['ID']['input']>;
};

export type Imeter_Well_ConfigByIdOrderBy = {
  config_id?: InputMaybe<OrderDirection>;
  config_value_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_ConfigByIdOutput = {
  __typename?: 'imeter_well_configByIDOutput';
  config_id?: Maybe<Scalars['ID']['output']>;
  config_value_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  imeter_well_configByID: Array<Imeter_Well_ConfigByIdOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['ID']['output']>;
};

export type Imeter_Well_ConfigExpression = {
  and?: InputMaybe<Imeter_Well_ConfigExpression>;
  config_id?: InputMaybe<IdExpression>;
  config_value_id?: InputMaybe<IntExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_ConfigExpression>;
  or?: InputMaybe<Imeter_Well_ConfigExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IdExpression>;
};

export type Imeter_Well_ConfigInput = {
  config_id?: InputMaybe<Scalars['ID']['input']>;
  config_value_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['ID']['input']>;
};

export type Imeter_Well_ConfigOrderBy = {
  config_id?: InputMaybe<OrderDirection>;
  config_value_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_ConfigOutput = {
  __typename?: 'imeter_well_configOutput';
  config?: Maybe<Imeter_ConfigOutput>;
  configByID?: Maybe<Imeter_ConfigOutput>;
  config_id?: Maybe<Scalars['ID']['output']>;
  config_value?: Maybe<Imeter_Config_ValueOutput>;
  config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  config_value_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  imeter_config_value?: Maybe<Imeter_Config_ValueOutput>;
  imeter_config_valueByID?: Maybe<Imeter_Config_ValueOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config: Array<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  well_id?: Maybe<Scalars['ID']['output']>;
};

export type Imeter_Well_Config_VwByIdExpression = {
  and?: InputMaybe<Imeter_Well_Config_VwByIdExpression>;
  config_id?: InputMaybe<IntExpression>;
  config_name?: InputMaybe<StringExpression>;
  config_value_id?: InputMaybe<IntExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_Config_VwByIdExpression>;
  or?: InputMaybe<Imeter_Well_Config_VwByIdExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  value?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Config_VwByIdInput = {
  config_id?: InputMaybe<Scalars['Int']['input']>;
  config_name?: InputMaybe<Scalars['String']['input']>;
  config_value_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Config_VwByIdOrderBy = {
  config_id?: InputMaybe<OrderDirection>;
  config_name?: InputMaybe<OrderDirection>;
  config_value_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Config_VwByIdOutput = {
  __typename?: 'imeter_well_config_vwByIDOutput';
  config_id?: Maybe<Scalars['Int']['output']>;
  config_name?: Maybe<Scalars['String']['output']>;
  config_value_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_config_vwByID: Array<Imeter_Well_Config_VwByIdOutput>;
  name?: Maybe<Scalars['String']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Config_VwExpression = {
  and?: InputMaybe<Imeter_Well_Config_VwExpression>;
  config_id?: InputMaybe<IntExpression>;
  config_name?: InputMaybe<StringExpression>;
  config_value_id?: InputMaybe<IntExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_Config_VwExpression>;
  or?: InputMaybe<Imeter_Well_Config_VwExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  value?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Config_VwInput = {
  config_id?: InputMaybe<Scalars['Int']['input']>;
  config_name?: InputMaybe<Scalars['String']['input']>;
  config_value_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Config_VwOrderBy = {
  config_id?: InputMaybe<OrderDirection>;
  config_name?: InputMaybe<OrderDirection>;
  config_value_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Config_VwOutput = {
  __typename?: 'imeter_well_config_vwOutput';
  config_id?: Maybe<Scalars['Int']['output']>;
  config_name?: Maybe<Scalars['String']['output']>;
  config_value_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_config_vw: Array<Imeter_Well_Config_VwOutput>;
  name?: Maybe<Scalars['String']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Equipment_AssignmentByIdExpression = {
  and?: InputMaybe<Imeter_Well_Equipment_AssignmentByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  not?: InputMaybe<Imeter_Well_Equipment_AssignmentByIdExpression>;
  or?: InputMaybe<Imeter_Well_Equipment_AssignmentByIdExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Equipment_AssignmentByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Equipment_AssignmentByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Equipment_AssignmentByIdOutput = {
  __typename?: 'imeter_well_equipment_assignmentByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_well_equipment_assignmentByID: Array<Imeter_Well_Equipment_AssignmentByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Equipment_AssignmentExpression = {
  and?: InputMaybe<Imeter_Well_Equipment_AssignmentExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  equipment_id?: InputMaybe<IntExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  not?: InputMaybe<Imeter_Well_Equipment_AssignmentExpression>;
  or?: InputMaybe<Imeter_Well_Equipment_AssignmentExpression>;
  startdatetime?: InputMaybe<IntExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Equipment_AssignmentInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  equipment_id?: InputMaybe<Scalars['Int']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  startdatetime?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Equipment_AssignmentOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  equipment_id?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  startdatetime?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Equipment_AssignmentOutput = {
  __typename?: 'imeter_well_equipment_assignmentOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  equipment_id?: Maybe<Scalars['Int']['output']>;
  facility?: Maybe<Imeter_FacilityOutput>;
  facilityByID?: Maybe<Imeter_FacilityOutput>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment: Array<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  startdatetime?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Humility_RuleByIdExpression = {
  and?: InputMaybe<Imeter_Well_Humility_RuleByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  humility_rule_id?: InputMaybe<IntExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  lbound?: InputMaybe<FloatExpression>;
  not?: InputMaybe<Imeter_Well_Humility_RuleByIdExpression>;
  or?: InputMaybe<Imeter_Well_Humility_RuleByIdExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  ubound?: InputMaybe<FloatExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Humility_RuleByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  humility_rule_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Humility_RuleByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  humility_rule_id?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Humility_RuleByIdOutput = {
  __typename?: 'imeter_well_humility_ruleByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  humility_rule_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_well_humility_ruleByID: Array<Imeter_Well_Humility_RuleByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  lbound?: Maybe<Scalars['Float']['output']>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Humility_RuleExpression = {
  and?: InputMaybe<Imeter_Well_Humility_RuleExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  humility_rule_id?: InputMaybe<IntExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  lbound?: InputMaybe<FloatExpression>;
  not?: InputMaybe<Imeter_Well_Humility_RuleExpression>;
  or?: InputMaybe<Imeter_Well_Humility_RuleExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  ubound?: InputMaybe<FloatExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Humility_RuleInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  humility_rule_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Humility_RuleOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  humility_rule_id?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Humility_RuleOutput = {
  __typename?: 'imeter_well_humility_ruleOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  humility_rule?: Maybe<Imeter_Humility_RuleOutput>;
  humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  humility_rule_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  lbound?: Maybe<Scalars['Float']['output']>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Humility_Rule_VwByIdExpression = {
  action_type?: InputMaybe<StringExpression>;
  and?: InputMaybe<Imeter_Well_Humility_Rule_VwByIdExpression>;
  default_lbound?: InputMaybe<FloatExpression>;
  default_ubound?: InputMaybe<FloatExpression>;
  humility_rule_id?: InputMaybe<IntExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_Humility_Rule_VwByIdExpression>;
  or?: InputMaybe<Imeter_Well_Humility_Rule_VwByIdExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  tag?: InputMaybe<StringExpression>;
  trigger_type?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Humility_Rule_VwByIdInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  default_lbound?: InputMaybe<Scalars['Float']['input']>;
  default_ubound?: InputMaybe<Scalars['Float']['input']>;
  humility_rule_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  trigger_type?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Humility_Rule_VwByIdOrderBy = {
  action_type?: InputMaybe<OrderDirection>;
  default_lbound?: InputMaybe<OrderDirection>;
  default_ubound?: InputMaybe<OrderDirection>;
  humility_rule_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
  trigger_type?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Humility_Rule_VwByIdOutput = {
  __typename?: 'imeter_well_humility_rule_vwByIDOutput';
  action_type?: Maybe<Scalars['String']['output']>;
  default_lbound?: Maybe<Scalars['Float']['output']>;
  default_ubound?: Maybe<Scalars['Float']['output']>;
  humility_rule_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_humility_rule_vwByID: Array<Imeter_Well_Humility_Rule_VwByIdOutput>;
  name?: Maybe<Scalars['String']['output']>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  trigger_type?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Humility_Rule_VwExpression = {
  action_type?: InputMaybe<StringExpression>;
  and?: InputMaybe<Imeter_Well_Humility_Rule_VwExpression>;
  default_lbound?: InputMaybe<FloatExpression>;
  default_ubound?: InputMaybe<FloatExpression>;
  humility_rule_id?: InputMaybe<IntExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_Humility_Rule_VwExpression>;
  or?: InputMaybe<Imeter_Well_Humility_Rule_VwExpression>;
  preferred_value?: InputMaybe<FloatExpression>;
  primo_prprty?: InputMaybe<StringExpression>;
  tag?: InputMaybe<StringExpression>;
  trigger_type?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Humility_Rule_VwInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  default_lbound?: InputMaybe<Scalars['Float']['input']>;
  default_ubound?: InputMaybe<Scalars['Float']['input']>;
  humility_rule_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferred_value?: InputMaybe<Scalars['Float']['input']>;
  primo_prprty?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  trigger_type?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Humility_Rule_VwOrderBy = {
  action_type?: InputMaybe<OrderDirection>;
  default_lbound?: InputMaybe<OrderDirection>;
  default_ubound?: InputMaybe<OrderDirection>;
  humility_rule_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  preferred_value?: InputMaybe<OrderDirection>;
  primo_prprty?: InputMaybe<OrderDirection>;
  tag?: InputMaybe<OrderDirection>;
  trigger_type?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Humility_Rule_VwOutput = {
  __typename?: 'imeter_well_humility_rule_vwOutput';
  action_type?: Maybe<Scalars['String']['output']>;
  default_lbound?: Maybe<Scalars['Float']['output']>;
  default_ubound?: Maybe<Scalars['Float']['output']>;
  humility_rule_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_humility_rule_vw: Array<Imeter_Well_Humility_Rule_VwOutput>;
  name?: Maybe<Scalars['String']['output']>;
  preferred_value?: Maybe<Scalars['Float']['output']>;
  primo_prprty?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  trigger_type?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_MetricByIdExpression = {
  and?: InputMaybe<Imeter_Well_MetricByIdExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref?: InputMaybe<StringExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_MetricByIdExpression>;
  or?: InputMaybe<Imeter_Well_MetricByIdExpression>;
  params?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_MetricByIdInput = {
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref?: InputMaybe<Scalars['String']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_MetricByIdOrderBy = {
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  params?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_MetricByIdOutput = {
  __typename?: 'imeter_well_metricByIDOutput';
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_well_metricByID: Array<Imeter_Well_MetricByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_MetricExpression = {
  and?: InputMaybe<Imeter_Well_MetricExpression>;
  chart_direction?: InputMaybe<StringExpression>;
  chart_scale?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref?: InputMaybe<StringExpression>;
  guid?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_MetricExpression>;
  or?: InputMaybe<Imeter_Well_MetricExpression>;
  params?: InputMaybe<StringExpression>;
  unit_of_measure?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_MetricInput = {
  chart_direction?: InputMaybe<Scalars['String']['input']>;
  chart_scale?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref?: InputMaybe<Scalars['String']['input']>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  params?: InputMaybe<Scalars['String']['input']>;
  unit_of_measure?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_MetricOrderBy = {
  chart_direction?: InputMaybe<OrderDirection>;
  chart_scale?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref?: InputMaybe<OrderDirection>;
  guid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  params?: InputMaybe<OrderDirection>;
  unit_of_measure?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_MetricOutput = {
  __typename?: 'imeter_well_metricOutput';
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  chart_direction?: Maybe<Scalars['String']['output']>;
  chart_scale?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref?: Maybe<Scalars['String']['output']>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_humility_rule?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_humility_ruleByID?: Maybe<Imeter_Humility_RuleOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric: Array<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_validation_metric?: Maybe<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['String']['output']>;
  unit_of_measure?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Metric_Asset_DataByIdExpression = {
  and?: InputMaybe<Imeter_Well_Metric_Asset_DataByIdExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_well_metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Well_Metric_Asset_DataByIdExpression>;
  or?: InputMaybe<Imeter_Well_Metric_Asset_DataByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Well_Metric_Asset_DataByIdInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_well_metric_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Well_Metric_Asset_DataByIdOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_well_metric_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Metric_Asset_DataByIdOutput = {
  __typename?: 'imeter_well_metric_asset_dataByIDOutput';
  asset_data_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_well_metric_asset_dataByID: Array<Imeter_Well_Metric_Asset_DataByIdOutput>;
  imeter_well_metric_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Well_Metric_Asset_DataExpression = {
  and?: InputMaybe<Imeter_Well_Metric_Asset_DataExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_well_metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Imeter_Well_Metric_Asset_DataExpression>;
  or?: InputMaybe<Imeter_Well_Metric_Asset_DataExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Imeter_Well_Metric_Asset_DataInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_well_metric_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Well_Metric_Asset_DataOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_well_metric_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Metric_Asset_DataOutput = {
  __typename?: 'imeter_well_metric_asset_dataOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_data_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metric_asset_data: Array<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_id?: Maybe<Scalars['Int']['output']>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type Imeter_Well_Metric_VwByIdExpression = {
  and?: InputMaybe<Imeter_Well_Metric_VwByIdExpression>;
  category?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref_full?: InputMaybe<StringExpression>;
  id?: InputMaybe<IntExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_name?: InputMaybe<StringExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_Metric_VwByIdExpression>;
  or?: InputMaybe<Imeter_Well_Metric_VwByIdExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_name?: InputMaybe<StringExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Imeter_Well_Metric_VwByIdInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref_full?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_name?: InputMaybe<Scalars['String']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_name?: InputMaybe<Scalars['String']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Well_Metric_VwByIdOrderBy = {
  category?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref_full?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_name?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_name?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Metric_VwByIdOutput = {
  __typename?: 'imeter_well_metric_vwByIDOutput';
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref_full?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imeter_well_metric_vwByID: Array<Imeter_Well_Metric_VwByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_name?: Maybe<Scalars['String']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_name?: Maybe<Scalars['String']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Well_Metric_VwExpression = {
  and?: InputMaybe<Imeter_Well_Metric_VwExpression>;
  category?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  data_ref_full?: InputMaybe<StringExpression>;
  id?: InputMaybe<IntExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  is_default_smoothing_tag?: InputMaybe<BooleanExpression>;
  is_required?: InputMaybe<BooleanExpression>;
  is_target_tag?: InputMaybe<BooleanExpression>;
  metric_id?: InputMaybe<IntExpression>;
  metric_name?: InputMaybe<StringExpression>;
  metric_nice_name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Imeter_Well_Metric_VwExpression>;
  or?: InputMaybe<Imeter_Well_Metric_VwExpression>;
  type?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  well_id?: InputMaybe<IntExpression>;
  well_name?: InputMaybe<StringExpression>;
  well_primo_prprty?: InputMaybe<StringExpression>;
};

export type Imeter_Well_Metric_VwInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  data_ref_full?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_default_smoothing_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_required?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_tag?: InputMaybe<Scalars['Boolean']['input']>;
  metric_id?: InputMaybe<Scalars['Int']['input']>;
  metric_name?: InputMaybe<Scalars['String']['input']>;
  metric_nice_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
  well_name?: InputMaybe<Scalars['String']['input']>;
  well_primo_prprty?: InputMaybe<Scalars['String']['input']>;
};

export type Imeter_Well_Metric_VwOrderBy = {
  category?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  data_ref_full?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  is_default_smoothing_tag?: InputMaybe<OrderDirection>;
  is_required?: InputMaybe<OrderDirection>;
  is_target_tag?: InputMaybe<OrderDirection>;
  metric_id?: InputMaybe<OrderDirection>;
  metric_name?: InputMaybe<OrderDirection>;
  metric_nice_name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
  well_name?: InputMaybe<OrderDirection>;
  well_primo_prprty?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Metric_VwOutput = {
  __typename?: 'imeter_well_metric_vwOutput';
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  data_ref_full?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imeter_well_metric_vw: Array<Imeter_Well_Metric_VwOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_default_smoothing_tag?: Maybe<Scalars['Boolean']['output']>;
  is_required?: Maybe<Scalars['Boolean']['output']>;
  is_target_tag?: Maybe<Scalars['Boolean']['output']>;
  metric_id?: Maybe<Scalars['Int']['output']>;
  metric_name?: Maybe<Scalars['String']['output']>;
  metric_nice_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
  well_name?: Maybe<Scalars['String']['output']>;
  well_primo_prprty?: Maybe<Scalars['String']['output']>;
};

export type Imeter_Well_Validation_MetricByIdExpression = {
  and?: InputMaybe<Imeter_Well_Validation_MetricByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  lbound?: InputMaybe<FloatExpression>;
  not?: InputMaybe<Imeter_Well_Validation_MetricByIdExpression>;
  or?: InputMaybe<Imeter_Well_Validation_MetricByIdExpression>;
  ubound?: InputMaybe<FloatExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  validation_metric_id?: InputMaybe<IntExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Validation_MetricByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  validation_metric_id?: InputMaybe<Scalars['Int']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Validation_MetricByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  validation_metric_id?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Validation_MetricByIdOutput = {
  __typename?: 'imeter_well_validation_metricByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_well_validation_metricByID: Array<Imeter_Well_Validation_MetricByIdOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  lbound?: Maybe<Scalars['Float']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  validation_metric_id?: Maybe<Scalars['Int']['output']>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Imeter_Well_Validation_MetricExpression = {
  and?: InputMaybe<Imeter_Well_Validation_MetricExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  is_active?: InputMaybe<BooleanExpression>;
  lbound?: InputMaybe<FloatExpression>;
  not?: InputMaybe<Imeter_Well_Validation_MetricExpression>;
  or?: InputMaybe<Imeter_Well_Validation_MetricExpression>;
  ubound?: InputMaybe<FloatExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  validation_metric_id?: InputMaybe<IntExpression>;
  well_id?: InputMaybe<IntExpression>;
};

export type Imeter_Well_Validation_MetricInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  lbound?: InputMaybe<Scalars['Float']['input']>;
  ubound?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  validation_metric_id?: InputMaybe<Scalars['Int']['input']>;
  well_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Imeter_Well_Validation_MetricOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  is_active?: InputMaybe<OrderDirection>;
  lbound?: InputMaybe<OrderDirection>;
  ubound?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  validation_metric_id?: InputMaybe<OrderDirection>;
  well_id?: InputMaybe<OrderDirection>;
};

export type Imeter_Well_Validation_MetricOutput = {
  __typename?: 'imeter_well_validation_metricOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_facility_well?: Maybe<Imeter_Facility_WellOutput>;
  imeter_facility_wellByID?: Maybe<Imeter_Facility_WellOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_config?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_configByID?: Maybe<Imeter_Well_ConfigOutput>;
  imeter_well_equipment_assignment?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_equipment_assignmentByID?: Maybe<Imeter_Well_Equipment_AssignmentOutput>;
  imeter_well_humility_rule?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_humility_ruleByID?: Maybe<Imeter_Well_Humility_RuleOutput>;
  imeter_well_metric?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_metricByID?: Maybe<Imeter_Well_MetricOutput>;
  imeter_well_validation_metric: Array<Imeter_Well_Validation_MetricOutput>;
  imeter_well_validation_metricByID?: Maybe<Imeter_Well_Validation_MetricOutput>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  lbound?: Maybe<Scalars['Float']['output']>;
  ubound?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  validation_metric?: Maybe<Imeter_Validation_MetricOutput>;
  validation_metricByID?: Maybe<Imeter_Validation_MetricOutput>;
  validation_metric_id?: Maybe<Scalars['Int']['output']>;
  well?: Maybe<Imeter_WellOutput>;
  wellByID?: Maybe<Imeter_WellOutput>;
  well_id?: Maybe<Scalars['Int']['output']>;
};

export type Label_GroupByIdExpression = {
  and?: InputMaybe<Label_GroupByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  label_group_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Label_GroupByIdExpression>;
  or?: InputMaybe<Label_GroupByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  source?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Label_GroupByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label_group_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Label_GroupByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  label_group_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  source?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Label_GroupByIdOutput = {
  __typename?: 'label_groupByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label_groupByID: Array<Label_GroupByIdOutput>;
  label_group_id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Label_GroupExpression = {
  and?: InputMaybe<Label_GroupExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  label_group_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Label_GroupExpression>;
  or?: InputMaybe<Label_GroupExpression>;
  project_id?: InputMaybe<StringExpression>;
  source?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Label_GroupInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label_group_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Label_GroupOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  label_group_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  source?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Label_GroupOutput = {
  __typename?: 'label_groupOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_group_id?: Maybe<Scalars['ID']['output']>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Label_ItemByIdExpression = {
  and?: InputMaybe<Label_ItemByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  label_group_id?: InputMaybe<StringExpression>;
  label_item_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Label_ItemByIdExpression>;
  or?: InputMaybe<Label_ItemByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Label_ItemByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label_group_id?: InputMaybe<Scalars['String']['input']>;
  label_item_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Label_ItemByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  label_group_id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Label_ItemByIdOutput = {
  __typename?: 'label_itemByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label_group_id?: Maybe<Scalars['String']['output']>;
  label_itemByID: Array<Label_ItemByIdOutput>;
  label_item_id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Label_ItemExpression = {
  and?: InputMaybe<Label_ItemExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  label_group_id?: InputMaybe<StringExpression>;
  label_item_id?: InputMaybe<IdExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Label_ItemExpression>;
  or?: InputMaybe<Label_ItemExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Label_ItemInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label_group_id?: InputMaybe<Scalars['String']['input']>;
  label_item_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Label_ItemOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  label_group_id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Label_ItemOutput = {
  __typename?: 'label_itemOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_group_id?: Maybe<Scalars['String']['output']>;
  label_item: Array<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_item_id?: Maybe<Scalars['ID']['output']>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  name?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Label_ReasonByIdExpression = {
  and?: InputMaybe<Label_ReasonByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Label_ReasonByIdExpression>;
  or?: InputMaybe<Label_ReasonByIdExpression>;
  reason?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Label_ReasonByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Label_ReasonByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  reason?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Label_ReasonByIdOutput = {
  __typename?: 'label_reasonByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reasonByID: Array<Label_ReasonByIdOutput>;
  reason?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Label_ReasonExpression = {
  and?: InputMaybe<Label_ReasonExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  label_item_id?: InputMaybe<StringExpression>;
  not?: InputMaybe<Label_ReasonExpression>;
  or?: InputMaybe<Label_ReasonExpression>;
  reason?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Label_ReasonInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label_item_id?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Label_ReasonOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label_item_id?: InputMaybe<OrderDirection>;
  reason?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Label_ReasonOutput = {
  __typename?: 'label_reasonOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_item_id?: Maybe<Scalars['String']['output']>;
  label_reason: Array<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  reason?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type ModelByIdExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<ModelByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  feature_query?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<IdExpression>;
  model_system?: InputMaybe<StringExpression>;
  model_type?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<ModelByIdExpression>;
  or?: InputMaybe<ModelByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  project_ref?: InputMaybe<StringExpression>;
  start_date?: InputMaybe<StringExpression>;
  status?: InputMaybe<StringExpression>;
  status_comment?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type ModelByIdInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  feature_query?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['ID']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  model_type?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  project_ref?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_comment?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type ModelByIdOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  feature_query?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  model_type?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  project_ref?: InputMaybe<OrderDirection>;
  start_date?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  status_comment?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type ModelByIdOutput = {
  __typename?: 'modelByIDOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  feature_query?: Maybe<Scalars['String']['output']>;
  modelByID: Array<ModelByIdOutput>;
  model_id?: Maybe<Scalars['ID']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_type?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_ref?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_comment?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type ModelExpression = {
  active_flag?: InputMaybe<IntExpression>;
  and?: InputMaybe<ModelExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  feature_query?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<IdExpression>;
  model_system?: InputMaybe<StringExpression>;
  model_type?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  not?: InputMaybe<ModelExpression>;
  or?: InputMaybe<ModelExpression>;
  project_id?: InputMaybe<StringExpression>;
  project_ref?: InputMaybe<StringExpression>;
  start_date?: InputMaybe<StringExpression>;
  status?: InputMaybe<StringExpression>;
  status_comment?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type ModelInput = {
  active_flag?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  feature_query?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['ID']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  model_type?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  project_ref?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_comment?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type ModelOrderBy = {
  active_flag?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  feature_query?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  model_type?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  project_ref?: InputMaybe<OrderDirection>;
  start_date?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  status_comment?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type ModelOutput = {
  __typename?: 'modelOutput';
  active_flag?: Maybe<Scalars['Int']['output']>;
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  feature_query?: Maybe<Scalars['String']['output']>;
  imeter_model_humility_rule?: Maybe<Imeter_Model_Humility_RuleOutput>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_id?: Maybe<Scalars['ID']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_type?: Maybe<Scalars['String']['output']>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  modelref?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_ref?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_comment?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type Model_ValidationByIdExpression = {
  and?: InputMaybe<Model_ValidationByIdExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  metric?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_validation_id?: InputMaybe<IdExpression>;
  not?: InputMaybe<Model_ValidationByIdExpression>;
  or?: InputMaybe<Model_ValidationByIdExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  value?: InputMaybe<FloatExpression>;
};

export type Model_ValidationByIdInput = {
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_validation_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type Model_ValidationByIdOrderBy = {
  asset_label_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  metric?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_validation_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type Model_ValidationByIdOutput = {
  __typename?: 'model_validationByIDOutput';
  asset_label_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Scalars['String']['output']>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_validationByID: Array<Model_ValidationByIdOutput>;
  model_validation_id?: Maybe<Scalars['ID']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Model_ValidationExpression = {
  and?: InputMaybe<Model_ValidationExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  metric?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_validation_id?: InputMaybe<IdExpression>;
  not?: InputMaybe<Model_ValidationExpression>;
  or?: InputMaybe<Model_ValidationExpression>;
  project_id?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
  value?: InputMaybe<FloatExpression>;
};

export type Model_ValidationInput = {
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_validation_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type Model_ValidationOrderBy = {
  asset_label_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  metric?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_validation_id?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type Model_ValidationOutput = {
  __typename?: 'model_validationOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_model_humility_rule?: Maybe<Imeter_Model_Humility_RuleOutput>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  metric?: Maybe<Scalars['String']['output']>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_validation: Array<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  model_validation_id?: Maybe<Scalars['ID']['output']>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Model_Validation_DetailsByIdExpression = {
  and?: InputMaybe<Model_Validation_DetailsByIdExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_status?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  metric?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_status?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  model_type?: InputMaybe<StringExpression>;
  model_validation_id?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Model_Validation_DetailsByIdExpression>;
  or?: InputMaybe<Model_Validation_DetailsByIdExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  project_id?: InputMaybe<StringExpression>;
  project_ref?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  value?: InputMaybe<FloatExpression>;
  window_end?: InputMaybe<StringExpression>;
  window_start?: InputMaybe<StringExpression>;
};

export type Model_Validation_DetailsByIdInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_status?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  model_type?: InputMaybe<Scalars['String']['input']>;
  model_validation_id?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  project_ref?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  window_end?: InputMaybe<Scalars['String']['input']>;
  window_start?: InputMaybe<Scalars['String']['input']>;
};

export type Model_Validation_DetailsByIdOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_status?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  metric?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  model_type?: InputMaybe<OrderDirection>;
  model_validation_id?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  project_ref?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
  window_end?: InputMaybe<OrderDirection>;
  window_start?: InputMaybe<OrderDirection>;
};

export type Model_Validation_DetailsByIdOutput = {
  __typename?: 'model_validation_detailsByIDOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_status?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Scalars['String']['output']>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_status?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_type?: Maybe<Scalars['String']['output']>;
  model_validation_detailsByID: Array<Model_Validation_DetailsByIdOutput>;
  model_validation_id?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_ref?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
  window_end?: Maybe<Scalars['String']['output']>;
  window_start?: Maybe<Scalars['String']['output']>;
};

export type Model_Validation_DetailsExpression = {
  and?: InputMaybe<Model_Validation_DetailsExpression>;
  asset_id?: InputMaybe<StringExpression>;
  asset_label_id?: InputMaybe<StringExpression>;
  assetref?: InputMaybe<StringExpression>;
  assettype?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  experiment_id?: InputMaybe<StringExpression>;
  experiment_status?: InputMaybe<StringExpression>;
  featureprimo?: InputMaybe<StringExpression>;
  metric?: InputMaybe<StringExpression>;
  model_id?: InputMaybe<StringExpression>;
  model_status?: InputMaybe<StringExpression>;
  model_system?: InputMaybe<StringExpression>;
  model_type?: InputMaybe<StringExpression>;
  model_validation_id?: InputMaybe<StringExpression>;
  modelref?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<Model_Validation_DetailsExpression>;
  or?: InputMaybe<Model_Validation_DetailsExpression>;
  predictiontag?: InputMaybe<StringExpression>;
  project_id?: InputMaybe<StringExpression>;
  project_ref?: InputMaybe<StringExpression>;
  targetprimo?: InputMaybe<StringExpression>;
  targettag?: InputMaybe<StringExpression>;
  value?: InputMaybe<FloatExpression>;
  window_end?: InputMaybe<StringExpression>;
  window_start?: InputMaybe<StringExpression>;
};

export type Model_Validation_DetailsInput = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  asset_label_id?: InputMaybe<Scalars['String']['input']>;
  assetref?: InputMaybe<Scalars['String']['input']>;
  assettype?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experiment_id?: InputMaybe<Scalars['String']['input']>;
  experiment_status?: InputMaybe<Scalars['String']['input']>;
  featureprimo?: InputMaybe<Scalars['String']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  model_id?: InputMaybe<Scalars['String']['input']>;
  model_status?: InputMaybe<Scalars['String']['input']>;
  model_system?: InputMaybe<Scalars['String']['input']>;
  model_type?: InputMaybe<Scalars['String']['input']>;
  model_validation_id?: InputMaybe<Scalars['String']['input']>;
  modelref?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  predictiontag?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  project_ref?: InputMaybe<Scalars['String']['input']>;
  targetprimo?: InputMaybe<Scalars['String']['input']>;
  targettag?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  window_end?: InputMaybe<Scalars['String']['input']>;
  window_start?: InputMaybe<Scalars['String']['input']>;
};

export type Model_Validation_DetailsOrderBy = {
  asset_id?: InputMaybe<OrderDirection>;
  asset_label_id?: InputMaybe<OrderDirection>;
  assetref?: InputMaybe<OrderDirection>;
  assettype?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  experiment_id?: InputMaybe<OrderDirection>;
  experiment_status?: InputMaybe<OrderDirection>;
  featureprimo?: InputMaybe<OrderDirection>;
  metric?: InputMaybe<OrderDirection>;
  model_id?: InputMaybe<OrderDirection>;
  model_status?: InputMaybe<OrderDirection>;
  model_system?: InputMaybe<OrderDirection>;
  model_type?: InputMaybe<OrderDirection>;
  model_validation_id?: InputMaybe<OrderDirection>;
  modelref?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  predictiontag?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  project_ref?: InputMaybe<OrderDirection>;
  targetprimo?: InputMaybe<OrderDirection>;
  targettag?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
  window_end?: InputMaybe<OrderDirection>;
  window_start?: InputMaybe<OrderDirection>;
};

export type Model_Validation_DetailsOutput = {
  __typename?: 'model_validation_detailsOutput';
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label_id?: Maybe<Scalars['String']['output']>;
  assetref?: Maybe<Scalars['String']['output']>;
  assettype?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiment_id?: Maybe<Scalars['String']['output']>;
  experiment_status?: Maybe<Scalars['String']['output']>;
  featureprimo?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Scalars['String']['output']>;
  model_id?: Maybe<Scalars['String']['output']>;
  model_status?: Maybe<Scalars['String']['output']>;
  model_system?: Maybe<Scalars['String']['output']>;
  model_type?: Maybe<Scalars['String']['output']>;
  model_validation_details: Array<Model_Validation_DetailsOutput>;
  model_validation_id?: Maybe<Scalars['String']['output']>;
  modelref?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  predictiontag?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_ref?: Maybe<Scalars['String']['output']>;
  targetprimo?: Maybe<Scalars['String']['output']>;
  targettag?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
  window_end?: Maybe<Scalars['String']['output']>;
  window_start?: Maybe<Scalars['String']['output']>;
};

export type ProjectByIdExpression = {
  and?: InputMaybe<ProjectByIdExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<ProjectByIdExpression>;
  or?: InputMaybe<ProjectByIdExpression>;
  project_id?: InputMaybe<IdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type ProjectByIdInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectByIdOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type ProjectByIdOutput = {
  __typename?: 'projectByIDOutput';
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  projectByID: Array<ProjectByIdOutput>;
  project_id?: Maybe<Scalars['ID']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
};

export type ProjectExpression = {
  and?: InputMaybe<ProjectExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  description?: InputMaybe<StringExpression>;
  name?: InputMaybe<StringExpression>;
  not?: InputMaybe<ProjectExpression>;
  or?: InputMaybe<ProjectExpression>;
  project_id?: InputMaybe<IdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type ProjectInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectOrderBy = {
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  project_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type ProjectOutput = {
  __typename?: 'projectOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experiment?: Maybe<ExperimentOutput>;
  experimentByID?: Maybe<ExperimentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  experiment_label?: Maybe<Experiment_LabelOutput>;
  experiment_labelByID?: Maybe<Experiment_LabelOutput>;
  experiment_metrics?: Maybe<Experiment_MetricsOutput>;
  experiment_metricsByID?: Maybe<Experiment_MetricsOutput>;
  imeter_equipment_label?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_labelByID?: Maybe<Imeter_Equipment_LabelOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_model_humility_rule?: Maybe<Imeter_Model_Humility_RuleOutput>;
  imeter_model_humility_ruleByID?: Maybe<Imeter_Model_Humility_RuleOutput>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  label_group?: Maybe<Label_GroupOutput>;
  label_groupByID?: Maybe<Label_GroupOutput>;
  label_item?: Maybe<Label_ItemOutput>;
  label_itemByID?: Maybe<Label_ItemOutput>;
  label_reason?: Maybe<Label_ReasonOutput>;
  label_reasonByID?: Maybe<Label_ReasonOutput>;
  model?: Maybe<ModelOutput>;
  modelByID?: Maybe<ModelOutput>;
  model_validation?: Maybe<Model_ValidationOutput>;
  model_validationByID?: Maybe<Model_ValidationOutput>;
  name?: Maybe<Scalars['String']['output']>;
  project: Array<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  project_id?: Maybe<Scalars['ID']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};

export type UsersByIdExpression = {
  and?: InputMaybe<UsersByIdExpression>;
  avatar?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  email?: InputMaybe<StringExpression>;
  full_name?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  not?: InputMaybe<UsersByIdExpression>;
  or?: InputMaybe<UsersByIdExpression>;
  phone?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
};

export type UsersByIdInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
};

export type UsersByIdOrderBy = {
  avatar?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  full_name?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
};

export type UsersByIdOutput = {
  __typename?: 'usersByIDOutput';
  avatar?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  usersByID: Array<UsersByIdOutput>;
};

export type UsersExpression = {
  and?: InputMaybe<UsersExpression>;
  avatar?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  email?: InputMaybe<StringExpression>;
  full_name?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  not?: InputMaybe<UsersExpression>;
  or?: InputMaybe<UsersExpression>;
  phone?: InputMaybe<StringExpression>;
  updated_at?: InputMaybe<StringExpression>;
};

export type UsersInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
};

export type UsersOrderBy = {
  avatar?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  full_name?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
};

export type UsersOutput = {
  __typename?: 'usersOutput';
  avatar?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  users: Array<UsersOutput>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdExpression = {
  and?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  asset_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_equipment_metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdExpression>;
  or?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_equipment_metric_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_equipment_metric_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdOutput = {
  __typename?: 'z_obs_imeter_equipment_metric_asset_data_assetByIDOutput';
  asset_data_id?: Maybe<Scalars['String']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_assetByID: Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetByIdOutput>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression = {
  and?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression>;
  asset_data_id?: InputMaybe<StringExpression>;
  asset_id?: InputMaybe<StringExpression>;
  created_at?: InputMaybe<StringExpression>;
  created_by?: InputMaybe<StringExpression>;
  id?: InputMaybe<IdExpression>;
  imeter_equipment_metric_id?: InputMaybe<IntExpression>;
  not?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression>;
  or?: InputMaybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetExpression>;
  updated_at?: InputMaybe<StringExpression>;
  updated_by?: InputMaybe<StringExpression>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetInput = {
  asset_data_id?: InputMaybe<Scalars['String']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imeter_equipment_metric_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOrderBy = {
  asset_data_id?: InputMaybe<OrderDirection>;
  asset_id?: InputMaybe<OrderDirection>;
  created_at?: InputMaybe<OrderDirection>;
  created_by?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imeter_equipment_metric_id?: InputMaybe<OrderDirection>;
  updated_at?: InputMaybe<OrderDirection>;
  updated_by?: InputMaybe<OrderDirection>;
};

export type Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput = {
  __typename?: 'z_obs_imeter_equipment_metric_asset_data_assetOutput';
  asset?: Maybe<AssetOutput>;
  assetByID?: Maybe<AssetOutput>;
  asset_data?: Maybe<Asset_DataOutput>;
  asset_dataByID?: Maybe<Asset_DataOutput>;
  asset_data_id?: Maybe<Scalars['String']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  asset_label?: Maybe<Asset_LabelOutput>;
  asset_labelByID?: Maybe<Asset_LabelOutput>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Imeter_EquipmentOutput>;
  equipmentByID?: Maybe<Imeter_EquipmentOutput>;
  experiment_asset?: Maybe<Experiment_AssetOutput>;
  experiment_assetByID?: Maybe<Experiment_AssetOutput>;
  experiment_data?: Maybe<Experiment_DataOutput>;
  experiment_dataByID?: Maybe<Experiment_DataOutput>;
  id?: Maybe<Scalars['ID']['output']>;
  imeter_equipment_metric?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metricByID?: Maybe<Imeter_Equipment_MetricOutput>;
  imeter_equipment_metric_asset_data?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_asset_dataByID?: Maybe<Imeter_Equipment_Metric_Asset_DataOutput>;
  imeter_equipment_metric_id?: Maybe<Scalars['Int']['output']>;
  imeter_well_asset?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_assetByID?: Maybe<Imeter_Well_AssetOutput>;
  imeter_well_metric_asset_data?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  imeter_well_metric_asset_dataByID?: Maybe<Imeter_Well_Metric_Asset_DataOutput>;
  metric?: Maybe<Imeter_MetricOutput>;
  metricByID?: Maybe<Imeter_MetricOutput>;
  project?: Maybe<ProjectOutput>;
  projectByID?: Maybe<ProjectOutput>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  z_obs_imeter_equipment_metric_asset_data_asset: Array<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
  z_obs_imeter_equipment_metric_asset_data_assetByID?: Maybe<Z_Obs_Imeter_Equipment_Metric_Asset_Data_AssetOutput>;
};
