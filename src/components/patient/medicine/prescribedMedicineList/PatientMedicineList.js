import React, { useEffect, useState } from 'react';
import BackButton from '../../../../shared/button/backButton';
import AddPatientPrescriptionModal from '../AddPatientPrescription/AddPatientPrescriptionModal';
import useRequest from '../../../../apiServices/useRequest';
import toasterMessage from '../../../../shared/toaster/Toaster';
import { useAuth } from '../../../../context/authContext/AuthContextProvider';
import Table from '../../../../shared/table/Table';
import RowView from './RowView';

const DataList = [
  {
    patientmedicinename: 'Calcicare',
    morning: true,
    midday: false,
    evening: false,
    dinner: true,
    startDate: '2023-11-21',
    endDate: '2023-11-28',
    desc: '',
  },
];

const PatientMedicineList = () => {
  const { user } = useAuth();
  const [postRequest, getRequest] = useRequest();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [prescriptionInputData, setPrescriptionInputData] = useState({
    patientmedicineName: '',
    morning: false,
    midday: false,
    evening: false,
    dinner: false,
    startdate: '',
    enddate: '',
    desc: '',
  });

  //upt state
  const [uptData, setUptData] = useState(null);

    //update hancle chang function
    const handleUptChange = (e) => {
      const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setUptData({
        ...uptData,
        [e.target.name]: value,
      });
    };

  const currentDate = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPrescriptionInputData({
      ...prescriptionInputData,
      [e.target.name]: value,
    });
  };

  const fetchPrescriptionList = async() => {
    setLoading(true)
    await getRequest(`/api/prescription`).then((res) => {
      if(res.data.error){
        setLoading(false)
        return toasterMessage(`${res.data.error}`, 'warning')
      }else{
        setDataList(res.data.data.result)
        setLoading(false)
      }
    }).catch((err) => {
      setLoading(false)
      return toasterMessage(`Server Error`, 'error')})
  }

  useEffect(() => {
    fetchPrescriptionList()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user._id) return toasterMessage(`User not found`, 'warning');
    const finalData = {
      ...prescriptionInputData,
      patientId: user._id,
    };
    setLoading(true);
    await postRequest(`/api/prescription/create`, finalData)
      .then((res) => {
        if (res.data.error) {
          setLoading(false);
          return toasterMessage(`${res.data.message}, 'warning`);
        } else {
          dataList.length > 0
                    ? setDataList((prev) => [...prev, res.data.data])
                    : setDataList([res.data.data]);
          setLoading(false);
          setPrescriptionInputData({
            patientmedicineName: '',
            morning: false,
            midday: false,
            evening: false,
            dinner: false,
            startdate: '',
            enddate: '',
            desc: '',
          })
          handleClose()
        }
      })
      .catch((err) => {
        setLoading(false);
        return toasterMessage(`Server error`, 'error');
      });
  };

  const handleUptSubmit = async (e, uptData) => {
    e.preventDefault();
    if (uptData == null) return toasterMessage(`Data not found in update`, 'warning');
    const finalData = {
      patientmedicineName: uptData.patientmedicineName,
    morning: uptData.morning,
    midday: uptData.midday,
    evening: uptData.evening,
    dinner: uptData.dinner,
    startdate: uptData.startdate,
    enddate: uptData.enddate,
    desc: uptData.desc,
      patientId: user._id,
    };
    setLoading(true);
    await postRequest(`/api/prescription/update/${uptData._id}`, finalData)
      .then((res) => {
        if (res.data.error) {
          setLoading(false);
          return toasterMessage(`${res.data.message}, 'warning`);
        } else {
          setDataList((prev) =>
          prev.map((item) =>
            item._id === uptData._id ? uptData: item
          )
        );
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false);
        return toasterMessage(`Server error`, 'error');
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container-2xl">
      {dataList.length === 0 ? (
        <div className="text-center mt-28">
          <h1>No Prescribed Medicine exists</h1>
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            onClick={handleOpen}
            className="text-gray-900 mt-3 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Prescribed Medicine
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <BackButton />
            
          </div>
         <div className='flex justify-between items-center'>
         <h1 className="text-2xl font-semibold">Prescribed Medicine List</h1>
          <button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              onClick={handleOpen}
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Prescribed Medicine
            </button>
         </div>
          <div className="flex flex-col border border-gray-200 mt-2">
            <Table>
              <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SL
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Patient Name
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                  Medicine Name
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                 Morning
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                 Lunch
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                 Evening
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                 Night
                  </th>{' '}
                  <th scope="col" className="px-6 py-3">
                    Issue Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    End Date
                  </th>
               
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {dataList.length > 0
                  ? dataList
                      .map((item, index) => (
                        <RowView
                        user={user}
                          item={item}
                          index={index}
                          setDataList={setDataList}
                          handleUptChange={handleUptChange}
                          uptData={uptData}
                          setUptData={setUptData}
                          handleUptSubmit={handleUptSubmit}
                        />
                      ))
                  : ''}
              </tbody>
            </Table>
          </div>
        </div>
      )}
      {isOpen && (
        <AddPatientPrescriptionModal
          handleClose={handleClose}
          prescriptionInputData={prescriptionInputData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          currentDate={currentDate}
        />
      )}
    </div>
  );
};

export default PatientMedicineList;
