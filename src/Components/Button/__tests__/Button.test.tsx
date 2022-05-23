import { render, screen, cleanup } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup)

test('renders Button', () => {
  render(<Button label={'Test'}/>);
});

test('renders Button correctly', () => {
  render(<Button label={'Test'}/>);
  expect(screen.getByTestId('button')).toHaveTextContent('Test')
});

/**
 * notes:
 * press u to update the failed snapshot, or to remove obsolete snapshot
 * useful in code review, to tally the changed snapshot, whether reqd or not
 */
test('matches snapshot', () => {
  const view = render(<Button label={'Snapshot'} />);
  expect(view).toMatchSnapshot();
});