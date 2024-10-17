import { lazy } from 'react'

const SampleComponent = lazy(() => import('platform/Sample'))

export default function Home() {
  return (
    <div>
      This is the atlas app

    <SampleComponent />
    </div>
  );
}
