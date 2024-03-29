import OgpSetting from "../../components/Common/OgpSetting";

export default function AboutSite() {
  return (
    <>
      <OgpSetting title={"ご利用規約｜もんたの森"} />

      <div
        style={{
          padding: "1rem",
          margin: "auto",
          maxWidth: "800px",
        }}
      >
        <img
          src="/goriyoukiyaku.png"
          style={{ width: "100%", height: "auto" }}
        />
        <h1>ようこそ！利用規約へ</h1>

        <p>
          当サイトを訪れてくれてありがとう！こちらを利用することで、あなたは以下の利用規約に同意したことになるので、さっと目を通してみてね。
        </p>

        <h2>画像のフリー使用について</h2>
        <p>
          当サイトの画像は、あなたのプロジェクトやビジネスにぴったり合うよう、個人使用でも商用使用でもOK！ただし、画像自体を再販売したり、配布することはご遠慮くださいね。
        </p>

        <h2>画像の著作権について</h2>
        <p>
          こちらで提供している画像は、作成者または私たちに著作権があります。使用する時は、「著作権所有者名」のクレジット表示を忘れずに。
        </p>

        <h2>利用のルール</h2>
        <p>
          法律に反する使い方や、他人の権利を傷つけるような使い方はダメだよ。みんなが気持ちよく使えるサイトにしましょう。
        </p>

        <h2 style={{ marginTop: "5rem" }}>これはOK！</h2>
        <ul>
          <li>ブログやウェブサイトでの使用</li>
          <li>商用プロジェクトでの使用</li>
          <li>プレゼンテーションやレポートでの使用</li>
        </ul>

        <h2>これはNG！</h2>
        <ul style={{ marginBottom: "4rem" }}>
          <li>画像の再販売や無断配布</li>
          <li>違法行為や他人の権利侵害に使用</li>
          <li>著作権表示なしでの使用</li>
        </ul>
      </div>
    </>
  );
}
