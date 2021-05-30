import {useRequireLogin} from "../hooks/useRequireLogin";

export default function Setting() {
  useRequireLogin();

  return (
    <>
      <h1>ログインされています！</h1>
    </>
  )
}
