import {useRequireLogin} from "../hooks/useRequireLogin";

export default function Setting() {
  useRequireLogin();

  return (
    <>
      <h1>ログインされています！</h1>
      <p>設定画面</p>
    </>
  )
}
