import React, { useState } from "react";

function ActivityForm({heading}) {
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [activities, setActivities] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To track edit mode
  const [editIndex, setEditIndex] = useState(null); // Index of the activity being edited
  
  // Handle edit button click
  const handleEdit = (index) => {
    const selectedActivity = activities[index];
    setActivity(selectedActivity.activity);
    setDate(selectedActivity.date);
    setPlace(selectedActivity.place);

    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle delete button click
  const handleDelete = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    console.log("Activity:", activity);
    console.log("Date:", date);
    console.log("Place:", place);

    if (isEditing) {
      // Update the activity being edited
      const updatedActivities = [...activities];
      updatedActivities[editIndex] = { activity, date, place };

      setActivities(updatedActivities);
            // Reset editing state
            setIsEditing(false);
            setEditIndex(null);
          } else {
            // Add a new activity
            setActivities([...activities, { activity, date, place }]);
          }

      // Clear the form fields
      setActivity("");
      setDate("");
      setPlace("");

  };



  return (
    <div>
      <h2> { heading } </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Activity Name:
          </label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            Place:
          </label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isEditing ? "Update Activity" : "Add Activity"}</button>
      </form>

      {/* Display the List of Activities */}
      <h2>Activity List</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map((item, index) => (
            <li key={index}>
              <strong>{item.activity}</strong> on {item.date} at {item.place}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities added yet.</p>
      )}

      
    </div>
  );
}

export default ActivityForm;