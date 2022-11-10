import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createPostRequest } from '../actions/actionCreators';

export const CreatePost = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(createPostRequest(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mt-4 mb-3">
        <input ref={register} type="text" id="title" name="title" className="form-control" placeholder="Title" />
      </div>
      <div className="form-group mb-3">
        <input ref={register} type="text" id="body" name="body" className="form-control" placeholder="Body" />
      </div>
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-success">Submit</button>
      </div>
    </form>
  );
};
