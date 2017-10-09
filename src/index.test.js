import sortItem from "./index";

describe('sortItem', () => {

  describe('up', () => {
    it('given path to array with one item should not sort array', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          }
        ]
      }

      expect(sortItem(['questions', 0], questionnaire, true))
        .toEqual(questionnaire);
    })

    it('given path to second item should move item to first', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          }
        ]
      }

      expect(sortItem(['questions', 1], questionnaire, true))
        .toEqual({
          questions: [
            {
              test: 'test2'
            },
            {
              test: 'test'
            }
          ]
        });
    })

    it('given path to second item of three item array should move item to first', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          },
          {
            test: 'test3'
          }
        ]
      }

      expect(sortItem(['questions', 1], questionnaire, true))
        .toEqual({
          questions: [
            {
              test: 'test2'
            },
            {
              test: 'test'
            },
            {
              test: 'test3'
            }
          ]
        });
    })

    it('given path to first item should NOT move item or error', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          }
        ]
      }

      expect(sortItem(['questions', 0], questionnaire, true))
        .toEqual(questionnaire);
    })

    it('given path to last item should move item to second last', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          },
          {
            test: 'test3'
          }
        ]
      }

      expect(sortItem(['questions', 2], questionnaire, true))
        .toEqual({
          questions: [
            {
              test: 'test'
            },
            {
              test: 'test3'
            },
            {
              test: 'test2'
            }
          ]
        });
    })
  });

  describe('down', () => {
    it('given path to array with one item should not sort array', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          }
        ]
      }

      expect(sortItem(['questions', 0], questionnaire, false))
        .toEqual(questionnaire);
    })

    it('given path to first item should move item to second', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          }
        ]
      }

      expect(sortItem(['questions', 0], questionnaire, false))
        .toEqual({
          questions: [
            {
              test: 'test2'
            },
            {
              test: 'test'
            }
          ]
        });
    })

    it('given path to second item of three item array should move item to last', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          },
          {
            test: 'test3'
          }
        ]
      }

      expect(sortItem(['questions', 1], questionnaire, false))
        .toEqual({
          questions: [
            {
              test: 'test'
            },
            {
              test: 'test3'
            },
            {
              test: 'test2'
            }
          ]
        });
    })

    it('given path to last item should NOT move item or error', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          }
        ]
      }

      expect(sortItem(['questions', 1], questionnaire, false))
        .toEqual(questionnaire);
    })

    it('given path to first item should move item to second last', () => {
      const questionnaire = {
        questions: [
          {
            test: 'test'
          },
          {
            test: 'test2'
          },
          {
            test: 'test3'
          }
        ]
      }

      expect(sortItem(['questions', 0], questionnaire, false))
        .toEqual({
          questions: [
            {
              test: 'test2'
            },
            {
              test: 'test'
            },
            {
              test: 'test3'
            }
          ]
        });
    })
  });

})