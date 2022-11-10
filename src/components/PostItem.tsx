interface Props {
  title: string;
  body: string;
}

export const PostItem = ({ title, body }: Props) => (
  <div className="list-group mt-4">
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
      </div>
      <p className="mb-1">{body}</p>
    </div>
  </div>
);
