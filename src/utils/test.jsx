import PropTypes from "prop-types"
import { render } from "@testing-library/react"

import { SurvivorsProvider } from "@ctx/Survivors"

const ProvidersWrapper = ({ children }) => {
  return <SurvivorsProvider>{children}</SurvivorsProvider>
}

ProvidersWrapper.propTypes = {
  children: PropTypes.node,
}

const customRender = (component, options) => {
  return render(component, { wrapper: ProvidersWrapper, ...options })
}

export * from "@testing-library/react"

export { customRender as render }
