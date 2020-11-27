import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Div, SatisfyingButton } from "../styles/StyledElements";
import FormRenderer from "./FormRenderer";
import PostKit from "../data/PostKit";

export default function PostCreateForm() {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  function createPost() {
    PostKit.createPost({ ...formData })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/posts");
      });
  }
  return (
    <Div>
      <FormRenderer form="createPost" onChange={setFormData} />
      <SatisfyingButton width="100%" color="aqua" onClick={createPost}>
        CREATE POST
      </SatisfyingButton>
    </Div>
  );
}
