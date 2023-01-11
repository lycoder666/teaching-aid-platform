# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

## api

```typescript

```

### 1.添加题目

```typescript
type label {
  id: number;
  name: string;
}
```

- **path**: /addProblem

- **参数**：`title: string`

          ```labels: label[]```

          ```description: stirng```

- **返回**：`problemID: number // if fail then -1 else id`

### 2.添加题解

- **path**: /addSolution

- **params**：`problemID: number, title: string` `description: stirng`

- **return**：`solutionID: number // if fail then -1 else id`

### 3.发布评论

- **path**: /addComment

- **params**: `solutionId: number`

  ​ `content: stirng`

- **return**：`commentID: if fail then -1 else id`

### 4.OCR

- **path**: /ocr

- **params**: ` images: file[]`

- **return**：`content: string`

### 5. get problem description by problemID

- **path**: /api/getProblemDescriptionByProblemID

- **params**: ` problemID: number`

- **return**: ` problemDescription: string`

### 6. get problems published by userID

```typescript
type problem {
  id: number;
  name: string;
  createdAt: number;
  updatedAt: number;
}
```

- **path**: /api/getProblemsPublishedByUser

- **params**: `userID: number`

- **return**: ` problems: problem[]`

### 7. get Unreviewd Problem by class id and user id

- **path**: /api/getUnreviewdProblemByClassIDAndUserID

- **params**: `userID: number, classID: number`

- **return**: `problems: problem[]`

### 8. get problem labels by problem ID

```typescript
type label {
  labelID: number;
  name: string;
}
```

- **path**: /api/getProblemLablesByProblemID
- **params**: ` problemID: number`

- **return**: `labels: label[]`

### 9. get problem status by problem id

- **path**: /api/getProblemStatus

- **params**: ` problemID: number`

- **return**: `problemStatus: number`

### 9. change problem status by problem id

改变审核状态

- **path**: /api/changeProblemStatus

- **params**: ` problemID: number`
- **return**: `successs: boolean`

### 10. change user name by user id

- **path**: /api/changeUserNameByUserID
- **params**: `userID: number, newName: string`

- **return**: `success: boolean`

### 11. change user phone number by user id

- **path**: /api/changeUserPhoneByUserID

- **params**: `userID: number, newPhone: number`

- **return**: `success: boolean`

### 12. change user priority by user id

- **path**: /api/changeUserPriorityByUserID

- **params**: `userID: number, newPriority: number`

- **return**: `success: boolean`

### 13. change user email by user id

- **path**: /api/changeUserEmailByUserID

- **params**: `userID: number, newEmail: string`

- **return**: `success: boolean`

### 14. get user created time by user id

- **path**: /api/getUserCreatedAtByID

- **params**: `userID: number`

- **return**: `createdAt: number`

### 15. get user last login time by user id

- **path**: /api/getUserLastLoginTimeByID

- **params**: `userID: number`

- **return**: `lastLogin: number`

### 16. get problem created at by problem id

- **path**: /api/getProblemCreatedAtByID

- **params**: `porblemID: number`

- **return**: `createdAt: number`

### 17. get problem updated at by problem id

- **path**: /api/getProblemUpdatedAtByID

- **params**: `problemID: number`

- **return**: `updatedAt: number`

### 18. change problem name by problem id

- **path**: /api/changeProblemNameByProblemID

- **params**: `problemID: number, newName: string`

- **return**: `success: boolean`

### 19. change problem labels by problem id

```typescript
type label {
  id: number;
  name: string;
}
```

- **path**: /api/changeProblemLablesByID

- **params**: `problemID: number, newLabels: label[]`

- **return**: `success: boolean`

### 19. change problem description by problem id

- **path**: /api/changeProblemDescriptionByID

- **params**: `problemID: number, newDescription: string`

- **return**: `success: boolean`

### 20. add label

```typescript
type label {
  id: number;
  name: string;
}
```

- **path**: /api/addLabel

- **params**: `labelName: string`

- **return**: `labelID: number //if fail then -1 else id`

### 21. delete label

- **path**: /api/deleteLabelbyID

- **params**: `labelID: number`

- **return**: `success: boolean`

### 22. delete user

- **path**: /api/deleteUserByID

- **params**: `userID: number`

- **return**: `success: boolean`

### 23. delete problem

- **path**: /api/deleteProblemByID

- **params**: `problemID: number`

- **return**: `success: boolean`

### 24. delete solution

- **path**: /api/deleteSolutionByID

- **params**: `solutionID: number`

- **return**: `success: boolean`

### 25. delete comment

- **path**: /api/deleteCommentByID

- **params**: `commentID: number`

- **return**: `success: boolean`

### 25. get class lists of user

```typescript
type class {
  classID: number;
  name: string;
}
```

- **path**: /api/getClassesByUserID
- **params**: `userID: number`

- **return**: ` classes: class[]`
