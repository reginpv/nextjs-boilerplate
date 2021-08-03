import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import Basic from '../components/templates/basic'

import { TEST } from '../config/constants'

export default function Home() {

  const { test } = useContext(GlobalContext)

  return (
    <Basic>
      Test: {test}<br />
      API: {process.env.WP_API}
      CONSTANT: { TEST }
    </Basic>
  )
}
