const signup = async (req, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      
      if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: "Email already in use" });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  