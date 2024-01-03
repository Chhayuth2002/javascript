const provinces = [];
let id = 0;

const addProvince = (name) => {
  const isExisting = provinces.find((province) => province.name === name);

  if (isExisting) return;

  id += 1;
  provinces.push({
    id: id,
    name,
    districts: [],
  });
};

const addDistrict = (provinceId, name) => {
  const province = provinces.find((province) => province.id === provinceId);

  if (!province) return;

  const isExisting = province.districts.find(
    (district) => district.name === name
  );

  if (isExisting) return;

  id += 1;
  province.districts.push({
    id: id,
    name,
    communes: [],
  });
};

const addCommune = (districtId, name) => {
  id += 1;

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

addProvince("Province 1");
addProvince("Province 2");
addProvince("Province 3");
addDistrict(100, "District 1");
addDistrict(1, "District 2");
addDistrict(2, "District 1");
addDistrict(3, "District 1");
addCommune(4, "Commune 1");
addCommune(4, "Commune 2");
addCommune(5, "Commune 1");
addCommune(6, "Commune 1");

console.log(JSON.stringify(provinces));
