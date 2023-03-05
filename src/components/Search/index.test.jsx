import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@utl/test"

import App from "@/App"

describe("@cmp/Search", () => {
  it("should show only 1 person that's already infected", async () => {
    const { getByTestId, findAllByTestId } = render(<App />)
    const infectedCheckbox = getByTestId("search-infected")

    fireEvent.click(infectedCheckbox)

    const nameList = await findAllByTestId("table-name")
    expect(nameList).toHaveLength(1)
  })

  it("should show 'no results' message", async () => {
    const { findByText } = render(<App />)
    const nameInput = screen.getByTestId("search-name")

    fireEvent.input(nameInput, { target: { value: "testnametest" } })

    const noResults = await findByText("No results found.")
    expect(noResults).toBeTruthy()
  })
})
