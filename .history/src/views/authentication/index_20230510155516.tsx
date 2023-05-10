import { useRouter } from 'next/router';
import React from 'react';

function AuthenticationView() {
	const router = useRouter();

	const LoginByGoogle = async () => {
		// router.replace(`http://localhost:5000/auth/google`);
		router.replace(
			`${process.env.NEXT_PUBLIC_BE_DOMAIN_URL}/auth/google`
			// `http://localhost:5000/auth/google`
		);
	};
	return (
		<div className="flex justify-center">
			<div className="w-[600px]">
				<div className="mx-[25px] p-[20px]">
					<div className="pt-[10px]">
						<img
							src="https://share-gcdn.basecdn.net/brand/logo.full.png"
							alt="Logo"
							className="mx-auto"
						/>
					</div>
					<form>
						<div className="text-center">
							<h1 className=" pt-[35px] pb-[8px] text-[24px] font-medium">
								Login
							</h1>
							<p className="pb-[20px] text-[14px] text-[#888] border-b-2 border-[#eee]">
								Welcome back. Login to start working.
							</p>
						</div>
						<div className="flex flex-col pb-[20px]">
							<label
								htmlFor="email"
								className="font-bold text-[13px] pb-[10px] text-[#000000]"
							>
								Email:
							</label>
							<input
								id="email"
								type="text"
								placeholder="Your email"
								// onChange={handleEmail}
								className="p-[10px] h-[40px] text-[16px] placeholder-[#888] rounded-[3px] bg-[#FFFFFF] outline-none border border-[#d3d3d3] "
							/>
						</div>
						<div className="flex flex-col pb-[20px]">
							<label
								htmlFor="password"
								className="font-bold text-[13px] pb-[10px] text-[#000000]"
							>
								Password:
								<p className="float-right text-[#267cde] text-[13px] font-normal">
									Forget your password?
								</p>
							</label>
							<input
								id="password"
								type="password"
								placeholder="Your password"
								// onChange={handleEmail}
								className="p-[10px] h-[40px] text-[16px] placeholder-[#888] rounded-[3px] bg-[#FFFFFF] outline-none border border-[#d3d3d3] "
							/>
						</div>
						<div className="flex">
							<div className="flex items-center">
								<input type="checkbox" />
							</div>
							<div className="text-[#888] text-[13px] ml-[12px]">
								Keep me logged in
							</div>
						</div>
						<div className="mt-[20px]">
							<button
								className="w-full h-[40px] text-center text-white-text text-[14px] font-medium bg-[#2bd14e] rounded-[3px]"
								type="submit"
							>
								Login to start working
							</button>
						</div>
					</form>
					<div className="mt-[35px] text-[13px] text-[#AAAAAA] text-center">
						Or, login via single sign-on
					</div>
					<div
						onClick={LoginByGoogle}
						className="flex items-center justify-center w-[250px] h-[38px] text-[#267BDE] bg-[#f3f3f3] hover:bg-[#267BDE] hover:text-[#FFFFFF] mx-auto mt-[20px] text-[13px] font-medium rounded-[3px] cursor-pointer"
					>
						Login with Google
					</div>
				</div>
			</div>
			<div className="hidden lg:block">
				<img
					src="https://static-gcdn.basecdn.net/account/image/background.png"
					alt=""
					// className=" object-cover"
				/>
			</div>
		</div>
	);
}

export default AuthenticationView;
