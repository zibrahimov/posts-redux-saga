interface Props {
  children: JSX.Element;
  isLoading: boolean,
};

const LoadingPlaceholder = ({ isLoading, children }: Props) => (isLoading ? (
  <div className="margin-auto">
    <div className="spinner-border" role="status">
    </div>
  </div>
) : (
  children
));

export default LoadingPlaceholder;
