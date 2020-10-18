import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct URL',() => {
    const expectedURL = 'abc';
    const component = shallow(<TripSummary id={expectedURL} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedURL}`);
  });

  it('should render correct src and alt for image', () => {
    const expectedImageSrc = 'image';
    const expectedImageAlt = 'image';
    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedImageAlt} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
  });

  it('should render correct props name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = '$11';
    const expectedDays = 8;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span:last-child').text()).toEqual(`from ${expectedCost}`);
    expect(component.find('.details span:first-child').text()).toEqual(`${expectedDays} days`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in order, without crashing', () => {
    const tags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('.tag').at(0)).toEqual[tags[0]];
    expect(component.find('.tag').at(1)).toEqual[tags[1]];
    expect(component.find('.tag').at(2)).toEqual[tags[2]];
  });

  it('should check if props tags is true, if not tags should not be rendered', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });

});