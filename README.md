# 古民家工房 田中建設 ホームページ

## GitHub Pages で公開する手順

### 1. GitHubアカウントを作る
https://github.com にアクセスしてアカウントを作成（無料）

### 2. リポジトリを作る
- 右上の「+」→「New repository」
- Repository name: `kominka-renovation`（または任意の名前）
- Public を選択
- 「Create repository」をクリック

### 3. ファイルをアップロードする
- 作成したリポジトリページで「uploading an existing file」をクリック
- このフォルダの全ファイルをドラッグ＆ドロップ
- 「Commit changes」をクリック

### 4. GitHub Pagesを有効にする
- リポジトリの「Settings」タブ
- 左メニューの「Pages」
- Branch: `main` / フォルダ: `/ (root)` を選択して「Save」
- 数分後に `https://ユーザー名.github.io/kominka-renovation/` で公開される

---

## お問い合わせフォームを動かす（Formspree設定）

### 1. Formspreeに登録
https://formspree.io にアクセスして無料登録

### 2. フォームを作成
- 「New Form」をクリック
- フォーム名を入力（例：古民家リノベーション相談）
- エンドポイントURL（`https://formspree.io/f/XXXXXXXX`）をコピー

### 3. contact.html を編集
`contact.html` の以下の部分を書き換える：
```
action="YOUR_FORMSPREE_ENDPOINT"
```
↓
```
action="https://formspree.io/f/XXXXXXXX"（コピーしたURLに変更）
```

---

## 施工事例を追加・編集する方法

`data/cases.json` をテキストエディタで開いて編集します。
1件分の形式：

```json
{
  "id": 21,
  "title": "事例のタイトル",
  "location": "都道府県市区町村",
  "year": 2026,
  "budget": "1,000万円",
  "period": "5ヶ月",
  "tags": ["省エネ", "断熱改修"],
  "description": "施工内容の説明文。",
  "image": "images/case21.jpg",
  "energy_saving": "光熱費 約35%削減"
}
```

写真は `images/` フォルダに `case21.jpg` のように保存してください。

---

## ファイル構成

```
kominka-renovation/
├── index.html        # トップページ
├── cases.html        # 施工事例一覧
├── pricing.html      # 料金・プラン
├── contact.html      # 無料相談フォーム
├── css/
│   └── style.css     # デザイン（暖色テーマ）
├── js/
│   └── main.js       # 施工事例の表示・フィルター
├── data/
│   └── cases.json    # 施工事例データ（ここを編集して事例を追加）
└── images/
    └── placeholder.svg   # 画像がない場合の代替表示
```
