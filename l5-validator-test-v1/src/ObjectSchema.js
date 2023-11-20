class Validator {
    object() {
      return {
        shape: (shapeObj) => {
          return {
            isValid: (data) => {
              if (typeof data !== 'object' || data === null) {
                return false;
              }
  
              const dataKeys = Object.keys(data);
              const shapeKeys = Object.keys(shapeObj);
  
              if (dataKeys.length !== shapeKeys.length) {
                return false;
              }
  
              for (const key of dataKeys) {
                if (!shapeObj[key] || !shapeObj[key].isValid(data[key])) {
                  return false;
                }
              }
  
              return true;
            },
          };
        },
      };
    }
  }

  export default Validator;
  