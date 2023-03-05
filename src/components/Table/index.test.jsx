import { describe, it, expect } from "vitest"
import { render, waitFor } from "@utl/test"

import survivorsList from "@api/survivors.json"

import Table from "."

describe("@cmp/Table", () => {
  it("should mount", async () => {
    const { findAllByTestId } = render(<Table />)

    const nameList = await findAllByTestId("table-name")
    const phoneList = await findAllByTestId("table-phone")
    const communityList = await findAllByTestId("table-community")
    const infectedList = await findAllByTestId("table-infected")

    survivorsList.map(async ({ name, phone, community, infected }, ind) => {
      expect(nameList[ind]).toHaveTextContent(name)
      expect(phoneList[ind]).toHaveTextContent(phone)
      expect(communityList[ind]).toHaveTextContent(community)

      await waitFor(() =>
        infected
          ? expect(infectedList[ind]).toBeChecked()
          : expect(infectedList[ind]).not.toBeChecked()
      )
    })
  })
})
