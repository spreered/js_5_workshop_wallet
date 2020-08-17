# ASTROCamp 5th JavaScript Workshop

請學員依序完成以下任務清單來達成目標

![](https://github.com/spreered/js_5_workshop_wallet/blob/master/5xWallet.gif?raw=true)

## 專案準備以及提交方式

1. 請 fork 本 repo 至自己的 GitHub 帳號下
2. git clone 到自己的電腦上
  - `git clone _your-git-repo.git_`
3. 請將 master branch 保護起來，不允許直接推 master branch
  - GitHub repo > Settings > Branches > Branch protection rules > add rule
  - `Branch name pattern` 上加上 `master`
3. 每個任務請開 branch 開發，branch name 命名規則: `feature/task_1`
4. 完成後請發 PR 到自已的 GitHub repo 上
  - `git push origin feature/task_1`
  - 將任務需求貼在 PR description 上面
  - 自己 merge PR
5. 記得回到 local 端 `git pull remote master` 更新本地端 master branch

## 本地端靜態伺服器

### 使用 npx 

```
$ npx http-server .
```

### 使用 vscode Live Server

https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

### 使用 chrome web server

https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb

## 任務清單

### Task 1

目標：取得輸入表單內容
- [ ] 「記個帳吧」表單送出後，取得表單內容
- [ ] 將表單內容轉置為 json 格式
- [ ] 按下 submit 後，不會真的送出表單，而是使用 `console.log` 印出新增的內容
- [ ] submit 後，請清空表單的內容。

```json
{ 
  date: "2020-08-09",
  category: "食",
  description: "壽司郎",
  amount: 1000 
}
```

### Task 2

目標：將新增的資料儲存到 localStorage
- [ ] 將 Task 1 新增的資料儲存到 localStorage 內, key 請設定為 `records`
- [ ] 當按下 submit 按鈕後，儲存記帳資料到 localStorage，然後讀出來，轉回 json 格式，印到 console.log 上
  - 如果不斷 submit 新資料，console.log 印出來的結果會應該越來越多

```json
[

  { 
    date: "2020-08-09",
    category: "食",
    description: "壽司郎",
    amount: 1000 
  },{
    date: "2020-08-10",
    category: "衣",
    description: "夜市牌",
    amount: 400 
  }
]
```

### Task 3

目標：localStorage 內的資料印到 `records-panel` 上
- [ ] 跟 todolist 一樣，新增帳目後，會將內容印在 `records-panel` 上
- [ ] 你的資料應該都會存在 localStorage，所以試著重新打開視窗，看看資料是不是還留在畫面上
- [ ] 請注意排序，最新的資料會在畫面的最上方

### Task 4

目標：可以刪掉帳目資料
- [ ] 點選 `x` 可以從畫面上刪掉資料，也要從你的 localStorage 內刪掉資料

提示: 
- 可以用 [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) 來知道你想刪掉的是哪一筆資料
- 為了能讓我們辨識到底要刪掉哪筆資料，我們必須在資料結構裡面加上 `uuid` 的欄位，並且在新增的時候給它一個不會重複的值(有點像是身分證字號)

更新後的資料格式：

```json
{
  uuid: "c962c88e-c589-4ca2-8e2a-e42094e0f2b8",
  date: "2020-08-10",
  category: "衣",
  description: "夜市牌",
  amount: 400 
}
```

產生 uuid 的 function 可以直接拿去用不用謝
```
function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d+ Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
```

### Task 5 

目標：可以搜尋資料
- [ ] 畫面上方有搜尋列，可以依日期/類別 filter 資料
  - 要注意 filter 的資料一樣可以做刪除功能

### Task 6 

目標: 發布成果到 GitHub Page 上
- [ ] 把這個發佈到 GitHub Page 上，你就有一個很鳥的(假)雲端記帳系統

### 其他挑戰

- [ ] 記帳表單的有些欄位必須有必填，如果沒填到請做檢查，可參考 [bootstrap](https://getbootstrap.com/docs/4.5/components/forms/#browser-defaults) 的建議做法
- [ ] 如果想要修改過往的記帳資料，該怎麼做？

