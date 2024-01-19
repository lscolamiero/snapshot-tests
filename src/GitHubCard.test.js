import { render, screen } from '@testing-library/react';
import GitHubCard from './components/GitHubCard';
import renderer from 'react-test-renderer';

test('renders a snapshot of my github account', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })