const provinces = [];
let id = 0;

const addProvince = (name) => {
  if (!isNaN(name)) {
    console.log("Input name as a string");
    return;
  }

  const nameLength = name.length;

  if (nameLength < 10 || nameLength > 50) {
    console.log("Min 10, Max 50 letter");
    return;
  }

  const isExisting = provinces.find((province) => province.name === name);

  if (isExisting) {
    console.log("Duplicate province name");
    return;
  }

  id += 1;
  provinces.push({
    id: id,
    name,
    districts: [],
  });
};

const addDistrict = (provinceId, name) => {
  if (isNaN(provinceId)) {
    console.log("Input province id as a integer");
    return;
  }

  if (!isNaN(name)) {
    console.log("Input district name as a string");
    return;
  }

  const nameLength = name.length;

  if (nameLength < 10 || nameLength > 50) {
    console.log("Min 10, Max 50 letter");
    return;
  }

  const province = provinces.find((province) => province.id === provinceId);

  if (!province) {
    console.log("Province not found");
    return;
  }

  const isExist = province.districts.find((district) => district.name === name);

  if (isExist) {
    console.log("Duplicate district name");
  }

  id += 1;
  province.districts.push({
    id: id,
    name,
    communes: [],
  });
};

const addCommune = (districtId, name) => {
  if (isNaN(districtId)) {
    console.log("Input district id as a integer");
    return;
  }

  if (!isNaN(name)) {
    console.log("Input district name as a string");
    return;
  }

  const nameLength = name.length;

  if (nameLength < 8 || nameLength > 50) {
    console.log("Min 8, Max 50 letter");
    return;
  }

  id += 1;

  const isExist = provinces.find((province) =>
    province.districts.some((district) => district.id === districtId)
  );

  if (!isExist) {
    console.log("District id not found");
    return;
  }
  provinces.find((province) =>
    province.districts.some((district) => {
      if (district.id === districtId) {
        district.communes.push({
          id: id,
          name,
        });
      }
    })
  );
};

addProvince("Province");
addProvince("Province 2");
addProvince("Province 3");
addDistrict("adf", "District 1");
addDistrict(1, "District 2");
addDistrict(2, "District 1");
addDistrict(5, "District 1");
addCommune(4, "Commune 1");
addCommune("adad", "Commune 2");
addCommune(5, "Commune 1");
addCommune(100, "Commune 1");
addCommune(6, "Commune 1");
addCommune(4, "Commune 1");
addCommune(6, "Commune 1");
addCommune(6, "Commune");

console.log(JSON.stringify(provinces));
