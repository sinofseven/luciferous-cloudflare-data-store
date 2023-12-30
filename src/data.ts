import { ArchivedObject } from "./types/archived_object.ts";

const PROD_DATA: ArchivedObject[] = [
  {
    name: "入門監視",
    description: ["オライリーのやつ"],
    filenames: ["入門監視.pdf", "入門監視.epub"],
  },
  {
    name: "ルールズ･オブ・プログラミング",
    description: ["オライリーのやつ"],
    filenames: [
      "ルールズ･オブ・プログラミング.pdf",
      "ルールズ･オブ・プログラミング.epub",
    ],
  },
  {
    name: "Effective Python 第2版",
    description: ["オライリーのやつ"],
    filenames: ["Effective Python 第2版.pdf", "Effective Python 第2版.epub"],
  },
  {
    name: "ゼロトラストネットワーク",
    description: ["オライリーのやつ"],
    filenames: [
      "ゼロトラストネットワーク.pdf",
      "ゼロトラストネットワーク.epub",
    ],
  },
  {
    name: "Go言語による並行処理",
    description: ["オライリーのやつ"],
    filenames: ["Go言語による並行処理.pdf", "Go言語による並行処理.epub"],
  },
  {
    name: "AWSの薄い本",
    filenames: [
      "AWSの薄い本 IAMのマニアックな話.pdf",
      "AWSの薄い本Ⅲ データ分析基盤を作ってみよう 〜設計編〜.pdf",
      "AWSの薄い本Ⅴ データ分析基盤を作ってみよう 〜性能測定編〜.pdf",
    ],
  },
];

const DEV_DATA: ArchivedObject[] = [
  {
    name: "アイコン画像",
    filenames: ["icon.png"],
  },
  {
    name: "テスト画像2",
    filenames: ["test_image.png", "test_image.avif"],
  },
];

export function listArchivedObjects(): ArchivedObject[] {
  return import.meta.env.PROD ? PROD_DATA : DEV_DATA;
}
