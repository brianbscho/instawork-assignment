const UserForm = () => {
  return (
    <>
      <div className="text-xl font-semibold mb-3">Info</div>
      <input
        type="text"
        placeholder="First name"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        placeholder="Last name"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        placeholder="Email address"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-2"
      />
      <input
        type="text"
        placeholder="Phone number"
        className="w-full py-2 px-3 border focus-visible:outline-none border-gray-300 focus:border-gray-900 rounded-md mb-12"
      />
      <div className="text-xl font-semibold mb-3">Role</div>
      <div className="flex justify-between items-center mb-1">
        <label htmlFor="REG">Regular - Can&apos;t delete members</label>
        <input type="radio" id="REG" name="role" value="REG" />
      </div>
      <div className="flex justify-between items-center">
        <label htmlFor="ADM">Admin - Can delete members</label>
        <input type="radio" id="ADM" name="role" value="ADM" />
      </div>
    </>
  );
};

export default UserForm;
