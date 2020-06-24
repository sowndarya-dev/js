describe("Input Validation", function() {
    var input;
  beforeEach(function() {
     input="java";
  });
    it("Min Length validation", function() {
        input ="ja";
        expect(input.validInput()).not.toBeTruthy()
        expect(input.error_message).toEqual("Input is  too sort")
    });
  });
  describe("Max Length Validation", function() {
     input="java is diffrent from javascript.java is object oriented language.Javascript is scripting languge";
    expect(input.validInput()).not.toBeTruthy()
    expect(input.error_message).toEqual("Input is too Long")

    
  });
