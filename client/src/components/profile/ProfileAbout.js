import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
	profile: {
		bio,
		skills,
		user: { name },
	},
}) => {
	const firstName = name.trim().split(" ")[0];
	const nameCheck = firstName.split("");

	return (
		<div class="profile-about bg-light p-2">
			{bio && (
				<Fragment>
					<h2 class="text-primary">
						{nameCheck[nameCheck.length - 1] === "s"
							? firstName + "'"
							: firstName + "'s"}{" "}
						Bio
					</h2>
					<p>{bio}</p>
					<div class="line"></div>
				</Fragment>
			)}

			<h2 class="text-primary">Skill Set</h2>
			<div class="skills">
				{skills.map((skill, index) => (
					<div key={index} className="p-1">
						<i className="fas fa-check" /> {skill}
					</div>
				))}
			</div>
		</div>
	);
};

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
