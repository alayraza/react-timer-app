import React from "react";
import App from "./App";
import { mount, ReactWrapper } from "enzyme";
import Timer from "./components/timer";

describe("counter app testing", () => {
  let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  //it will run before every test
  beforeEach(() => {
    container = mount(<App />);
  });

  test("testing app div render", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    // expect(container.props().timer);
  });

  test("timer component exist", () => {
    expect(
      container.containsMatchingElement(
        <Timer timer={container.props().timer} />
      )
    ).toBeTruthy();
  });
  //start button tests
  test("checking on start button click", () => {
    container.find("#start").simulate("click");
    expect(container.find("#timer").text()).toBe("00 : 00 : 00 : 01");
    // state status should change to 1
    expect(container.props().status === 1);
  });
  //Stop button tests
  test("checking on stop  button click", () => {
    container.find("#start").simulate("click");
    container.find("#stopResume").simulate("click");
    expect(container.find("#stopResume").text()).toBe("Resume");
    expect(container.find("#timer").text()).toEqual("00 : 00 : 00 : 01");
  });
  //resume button tests
  test("checking on resume button click", () => {
    container.find("#start").simulate("click");
    container.find("#stopResume").simulate("click");
    container.find("#stopResume").simulate("click");
    expect(container.find("#timer").text()).toEqual("00 : 00 : 00 : 02");
  });

  //reset button tests
  test("checking on reset   button click", () => {
    container.find("#start").simulate("click");
    container.find("#reset").simulate("click");
    expect(container.find("#timer").text()).toEqual("00 : 00 : 00 : 00");
    // state status should change to 0
    expect(container.props().status === 0);
  });
});
