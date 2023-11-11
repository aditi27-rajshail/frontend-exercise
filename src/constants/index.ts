import { gear, listCheck, userCircleGear } from "../assets";
import { HandlerKeys } from "../types";

export const title = "クリプタクトで計算を始めてみましょう";
export const asideTitle = "クイックアクセス";
export const progressStep = "ステップ";
export const mainData = [
  {
    img: userCircleGear,
    title: "取引の情報を入力しましょう",
    subText: "仮想通貨の損益計算には過去すべての取引履歴が必要になります。",
    isDisabled: false,
    accordionDetails: [
      {
        title: "取引所 / ブロックチェーンを選択しましょう",
        tag: "13 取引所/ブロックチェーン選択済み",
        subText:
          "取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。",
        info: "",
        buttonText: "選択する",
        btnAction: "selectExchangeBlockchain" as HandlerKeys,
      },
      {
        title: "取引履歴を反映させましょう",
        tag: "",
        subText:
          "ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。",
        info: "",
        buttonText: "追加する",
        btnAction: "reflectTradeHistory" as HandlerKeys,
      },
    ],
  },
  {
    img: gear,
    title: "足りていない情報を追加しましょう",
    subText: "情報が不足していると計算が完了しません。必ず追加してください。",
    isDisabled: true,
    accordionDetails: [
      {
        title: "DeFi取引における「要識別」を解消しましょう",
        tag: "",
        subText:
          "必要な情報が足りていないため、自動で識別できなかった取引や、DeFi取引以外の入出金取引については、「要識別」として分類されます。このページで取引種類を選択し、計算ができる状態にしてください。",
        info: "お客様はDeFi 取引が無い為、完了したものとして認識しました。",
        buttonText: "識別する",
        btnAction: "eliminateRequiredIdentificationDeFi" as HandlerKeys,
      },
      {
        title: "未分類取引を解消しましょう",
        tag: "",
        subText:
          "アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。",
        info: "",
        buttonText: "追加する",
        btnAction: "eliminateUnclassifiedTxn" as HandlerKeys,
      },
    ],
  },
  {
    img: listCheck,
    title: "計算結果を確認しましょう",
    subText:
      "計算結果の最終的なチェックを行って確定申告に必要な情報を確認しましょう。最後にデータをダウンロードできます。",
    isDisabled: false,
    accordionDetails: [],
  },
];

export const asideContainerData = [
  {
    title: "年度初めの残高入力",
    subText:
      "過去の計算結果を引き継いで計算する場合はこちらをクリックしてください。",
  },
  {
    title: "帳簿設定",
    subText:
      "計算方法 (総平均法、移動平均法)、会計通貨、データ確定に関する設定の変更ができます。",
  },
];
