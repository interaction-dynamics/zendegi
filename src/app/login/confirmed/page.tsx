const LoginConfirmed = () => {
  return (
    <div className="fixed min-h-full w-full flex flex-col items-center justify-center bg-white p-5">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Beta
        </h1>
        <p className="text-gray-500 text-center">
          Zendegi is currently in beta. It means the accounts are manually
          activated. You will be notified when your account will be ready.
        </p>
      </div>
      <p className="text-gray-500 text-center p-5">
        Your subscription is confirmed
      </p>
    </div>
  )
}

export default LoginConfirmed
