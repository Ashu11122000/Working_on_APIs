// controllers/userController.js

export const getAllUsers = (_req, res) => {
    res.json([{ id: 1, name: "Ashish" }]);
};

export const createUser = (req, res) => {
    res.status(201).json({ id: 2, ...req.body });
};

export const updateUser = (req, res) => {
    res.json({ message: `User ${req.params.id} updated` });
};

export const deleteUser = (_req, res) => {
    res.status(204).send();
};
