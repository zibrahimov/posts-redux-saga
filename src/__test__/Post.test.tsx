import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from "react-redux";
import CreatePost from '../components/CreatePost';
import store from '../store/store';

describe("<CreatePost />", () => {
  it("Create Post", async () => {
    render(<Provider store={store}><CreatePost /></Provider>);

    // Title
    const title = screen.getByPlaceholderText('Title');
    fireEvent.change(title, { target: { value: 'Test' } });
    expect(title.value).toBe('Test');

    // Body
    const body = screen.getByPlaceholderText('Body');
    fireEvent.change(body, { target: { value: 'Body' } });
    expect(body.value).toBe('Body');

    // Submit
    act(() => {
      fireEvent.click(screen.getByText(/Submit/i));
    });
    expect(await screen.findByText('Success')).toBeInTheDocument();
  });
});
