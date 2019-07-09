/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDiaryEntryInput = {
  id?: string | null,
  date?: string | null,
  userID?: string | null,
  diaryBody?: string | null,
};

export type UpdateDiaryEntryInput = {
  id: string,
  date?: string | null,
  userID?: string | null,
  diaryBody?: string | null,
};

export type DeleteDiaryEntryInput = {
  id?: string | null,
};

export type CreateTheFactsInput = {
  id?: string | null,
  userID?: string | null,
  birthName?: string | null,
  nickName?: string | null,
  height?: string | null,
  eyeColour?: string | null,
  hairColour?: string | null,
};

export type UpdateTheFactsInput = {
  id: string,
  userID?: string | null,
  birthName?: string | null,
  nickName?: string | null,
  height?: string | null,
  eyeColour?: string | null,
  hairColour?: string | null,
};

export type DeleteTheFactsInput = {
  id?: string | null,
};

export type ModelDiaryEntryFilterInput = {
  id?: ModelIDFilterInput | null,
  date?: ModelStringFilterInput | null,
  userID?: ModelStringFilterInput | null,
  diaryBody?: ModelStringFilterInput | null,
  and?: Array< ModelDiaryEntryFilterInput | null > | null,
  or?: Array< ModelDiaryEntryFilterInput | null > | null,
  not?: ModelDiaryEntryFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTheFactsFilterInput = {
  id?: ModelIDFilterInput | null,
  userID?: ModelStringFilterInput | null,
  birthName?: ModelStringFilterInput | null,
  nickName?: ModelStringFilterInput | null,
  height?: ModelStringFilterInput | null,
  eyeColour?: ModelStringFilterInput | null,
  hairColour?: ModelStringFilterInput | null,
  and?: Array< ModelTheFactsFilterInput | null > | null,
  or?: Array< ModelTheFactsFilterInput | null > | null,
  not?: ModelTheFactsFilterInput | null,
};

export type CreateDiaryEntryMutationVariables = {
  input: CreateDiaryEntryInput,
};

export type CreateDiaryEntryMutation = {
  createDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type UpdateDiaryEntryMutationVariables = {
  input: UpdateDiaryEntryInput,
};

export type UpdateDiaryEntryMutation = {
  updateDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type DeleteDiaryEntryMutationVariables = {
  input: DeleteDiaryEntryInput,
};

export type DeleteDiaryEntryMutation = {
  deleteDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type CreateTheFactsMutationVariables = {
  input: CreateTheFactsInput,
};

export type CreateTheFactsMutation = {
  createTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};

export type UpdateTheFactsMutationVariables = {
  input: UpdateTheFactsInput,
};

export type UpdateTheFactsMutation = {
  updateTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};

export type DeleteTheFactsMutationVariables = {
  input: DeleteTheFactsInput,
};

export type DeleteTheFactsMutation = {
  deleteTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};

export type GetDiaryEntryQueryVariables = {
  id: string,
};

export type GetDiaryEntryQuery = {
  getDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type ListDiaryEntrysQueryVariables = {
  filter?: ModelDiaryEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiaryEntrysQuery = {
  listDiaryEntrys:  {
    __typename: "ModelDiaryEntryConnection",
    items:  Array< {
      __typename: "DiaryEntry",
      id: string,
      date: string | null,
      userID: string | null,
      diaryBody: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTheFactsQueryVariables = {
  id: string,
};

export type GetTheFactsQuery = {
  getTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};

export type ListTheFactssQueryVariables = {
  filter?: ModelTheFactsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTheFactssQuery = {
  listTheFactss:  {
    __typename: "ModelTheFactsConnection",
    items:  Array< {
      __typename: "TheFacts",
      id: string,
      userID: string | null,
      birthName: string | null,
      nickName: string | null,
      height: string | null,
      eyeColour: string | null,
      hairColour: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDiaryEntrySubscription = {
  onCreateDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type OnUpdateDiaryEntrySubscription = {
  onUpdateDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type OnDeleteDiaryEntrySubscription = {
  onDeleteDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type OnCreateTheFactsSubscription = {
  onCreateTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};

export type OnUpdateTheFactsSubscription = {
  onUpdateTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};

export type OnDeleteTheFactsSubscription = {
  onDeleteTheFacts:  {
    __typename: "TheFacts",
    id: string,
    userID: string | null,
    birthName: string | null,
    nickName: string | null,
    height: string | null,
    eyeColour: string | null,
    hairColour: string | null,
  } | null,
};
