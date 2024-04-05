import { Post } from "./VerbClass/Post";
import { Get } from "./VerbClass/Get";
import { Put } from "./VerbClass/Put";
import { Patch } from "./VerbClass/Patch";
import { Delete } from "./VerbClass/Delete";
import { ForVerbs } from "./utils/ForVerbs";

export class Methods extends ForVerbs {
  post = (api) => {
    return new Post(this.givesApi(api));
  };

  get = (api) => {
    return new Get(this.givesApi(api));
  };

  put = (api) => {
    return new Put(this.givesApi(api));
  };

  patch = (api) => {
    return new Patch(this.givesApi(api));
  };

  delete = (api) => {
    return new Delete(this.givesApi(api));
  };
}
