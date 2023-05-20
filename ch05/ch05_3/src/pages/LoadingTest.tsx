import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppState } from "../store";
import { Title } from "../components";
import {Button} from '../theme/daisyui'
import * as L from '../store/loading'

export default function LoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector<AppState,L.State>(({loading}) =>loading)

  const doTimedLoading = useCallback(() => {
    dispatch<any>(L.doTimeLoading(1000))
  },[dispatch])

  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button className="btn-sm btn-primary"
          onClick={doTimedLoading}
          disabled={loading}>
            do timed loading
          </Button>
        </div>
        {loading && (
          <div className="flex itmes-center justify-center">
            <Button className="btn btn-circle loading"></Button>
          </div>
        )}
      </div>
    </section>
  );
}
