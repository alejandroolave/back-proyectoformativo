import { check } from 'express-validator';

export const validatorMaqui = [
  check('nombre', 'El nombre es requerido').isLength({ max: 50 }).notEmpty().matches(/^[a-zA-Z\s]*$/).withMessage('El nombre solo puede contener letras y espacios'),
  check('marca', 'La marca es requerida, no puede estar vacia').isLength({ max: 50 }).notEmpty(),
  check('placa', 'La placa es requerida, no puede estar vacia').isLength({ max: 50 }).notEmpty(),
  check('modelo', 'El modelo es requerido, no puede estar vacia').isLength({ max: 50 }).notEmpty(),
  check('cantidad', 'La cantidad es requerida y debe ser numérica').isLength({ max: 10 }).notEmpty().isNumeric(),
  // check('manual', 'El manual es requerido, no puede estar vacia').isLength({ max: 50 }).notEmpty(),
  // check('img', 'Imagen Requerida').notEmpty(),
  check('serial', 'Serial requerido, no puede estar vacia').isLength({ max: 50 }).notEmpty(),
  check('descripcion', 'La descripción de la máquina es requerida').isLength({ max: 50 }).notEmpty(),
  // check('estado', 'Estado incorrecto, debe ser "activo", "funcionamiento, baja, reparacion"').isIn(['funcionamiento', 'baja', 'reparacion']),
  check('id_usuario', 'Usuario requerido y debe ser numérico').notEmpty(),
  check('id_area', 'Area requerido y debe ser numérico').notEmpty(),
  check('id_ambiente', 'Ambiente requerido y debe ser numérico').notEmpty(),
];
