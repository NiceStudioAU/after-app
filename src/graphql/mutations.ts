// tslint:disable
// this is an auto generated file. This will be overwritten

export const createDiaryEntry = `mutation CreateDiaryEntry($input: CreateDiaryEntryInput!) {
  createDiaryEntry(input: $input) {
    id
    date
    userID
    diaryBody
  }
}
`;
export const updateDiaryEntry = `mutation UpdateDiaryEntry($input: UpdateDiaryEntryInput!) {
  updateDiaryEntry(input: $input) {
    id
    date
    userID
    diaryBody
  }
}
`;
export const deleteDiaryEntry = `mutation DeleteDiaryEntry($input: DeleteDiaryEntryInput!) {
  deleteDiaryEntry(input: $input) {
    id
    date
    userID
    diaryBody
  }
}
`;
export const createTheFacts = `mutation CreateTheFacts($input: CreateTheFactsInput!) {
  createTheFacts(input: $input) {
    id
    userID
    birthName
    nickName
    height
    eyeColour
    hairColour
  }
}
`;
export const updateTheFacts = `mutation UpdateTheFacts($input: UpdateTheFactsInput!) {
  updateTheFacts(input: $input) {
    id
    userID
    birthName
    nickName
    height
    eyeColour
    hairColour
  }
}
`;
export const deleteTheFacts = `mutation DeleteTheFacts($input: DeleteTheFactsInput!) {
  deleteTheFacts(input: $input) {
    id
    userID
    birthName
    nickName
    height
    eyeColour
    hairColour
  }
}
`;
