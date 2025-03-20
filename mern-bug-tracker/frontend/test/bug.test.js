import axios from "axios";
import {render,waitFor} from "@testing-library/react";
import BugList from "../components.BugList";

jest.mock("axios");

test("BugList fetches and displays bugs",async()=> {
    axios.get.mockResolvedValue({data:[{id:1,title:"Bug",status:"OPEN"}]});
    const {getByText}=render(<BugList/>);
    await waitFor(()=>expect(getByText("Bug 1-OPEN")).toBeInTheDocument());
});