import { render, screen, cleanup } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup)

// it ~ test, descibe is not recommended acc to https://create-react-app.dev/docs/running-tests

it('renders Button', () => {
  render(<Button label={'Test'}/>);
});

it('renders Button correctly', () => {
  render(<Button label={'Test'}/>);
  expect(screen.getByTestId('button')).toHaveTextContent('Test')
});

it('renders text', () => {
  render(<Button label={'Text Test'} />)
  expect(screen.getByText('Text Test')).toBeInTheDocument()
})

/**
 * notes:
 * press u to update the failed snapshot, or to remove obsolete snapshot
 * useful in code review, to tally the changed snapshot, whether reqd or not
 */
it('matches snapshot', () => {
  const view = render(<Button label={'Snapshot'} />);
  expect(view).toMatchSnapshot();
});